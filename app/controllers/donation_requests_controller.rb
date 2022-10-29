class DonationRequestsController < ApplicationController

    skip_before_action :authorize, only: [:latest_approved_requests]

    rescue_from ActiveRecord::RecordNotFound, with: :donation_request_not_found

    # GET all donation requests
    def index
        donation_requests = DonationRequest.all.order(created_at: :desc)
        render json: donation_requests, status: :ok, each_serializer: CustomDonationRequestSerializer
    end

    # GET one donation request
    def show
        donation_request = find_donation_request
        render json: donation_request, status: :ok, serializer: CustomDonationRequestSerializer
    end

    # POST new donation request
    def create
        user = User.find(session[:user_id])
        if user.role == 'ngo'
            donation_request = DonationRequest.create!(donation_request_params)
            render json: donation_request, status: :created, serializer: CustomDonationRequestSerializer
        else
            render json: {errors: ["You do not have previlledges to create a donation request"]}, status: :unauthorized
        end
    end

    # PATCH a donation request
    def update
        donation_request = find_donation_request
        donation_request.update!(donation_request_params)
        render json: donation_request, status: :accepted, serializer: CustomDonationRequestSerializer
    end

    # DELETE a donation request
    def destroy
        donation_request = find_donation_request
        donation_request.destroy
        head :no_content
    end

    #fetching last six approved and open requests
    def latest_approved_requests
        donation_requests = DonationRequest.where(status: "approved", open: true).order(created_at: :desc).limit(6)
        render json: donation_requests, status: :ok, each_serializer: ApprovedDonationRequestsSerializer
    end

    #fetching all approved and open requests
    def approved_open_requests
        donation_requests = DonationRequest.where(status: "approved", open: true).order(created_at: :desc)
        render json: donation_requests, status: :ok, each_serializer: ApprovedDonationRequestsSerializer
    end

    # GET NGOs specific donatin requests
    def ngo_requests
        user = User.find(session[:user_id]) # find user in session
        ngo = Ngo.find_by(user_id: user.id) # find ngo for the user in session
        if user && user.role == "ngo" && ngo # check if the user is authorized
            donation_requests = DonationRequest.where(ngo_id: ngo.id).order(created_at: :desc)
            render json: donation_requests, status: :ok, each_serializer: CustomDonationRequestSerializer
        else
            render json: {errors: ["User not authorized"]}, status: :unauthorized
        end
    end

    # Private methods
    private

    # find a donation request
    def find_donation_request
        DonationRequest.find(params[:id])
    end

    # Permit params for a donation request
    def donation_request_params
        params.permit(:title, :description, :target_amount, :amount_raised, :status, :open, :category_id, :ngo_id, :image, :bank_statement)
    end

    # Render error for a donation request not found
    def donation_request_not_found
        render json: {errors: ["Donation request not found"]}, status: :not_found
    end
end
