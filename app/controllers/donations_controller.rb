class DonationsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :donation_not_found

    # GET all the donations
    def index
        donations = Donation.all
        render json: donations, status: :ok, each_serializer: NgoCustomDonationSerializer
    end

    # GET one donation
    def show
        donation = find_donation
        render json: donation, status: :ok, serializer: NgoCustomDonationSerializer
    end

    # POST a new donation
    def create
        user = User.find(session[:user_id])
        if user.role == 'donor'
            donation = user.donations.create!(donation_params)
            render json: donation, status: :created
        else
            render json: {errors: ["You do not have access rights to donate"]}, status: :unauthorized
        end
    end

    # PATCH a donation
    def update
        donation = find_donation
        donation.update!(donation_params)
        render json: donation, status: :accepted
    end

    # GET donations for a specific NGO
    def ngo_donations
        user = User.find(session[:user_id]) # find user in session
        if user && user.role == "ngo" # check if the user in session is authorized
            donations = Donation.where(user_id: user.id).order(created_at: :desc)
            render json: donations, status: :ok, each_serializer: NgoCustomDonationSerializer
        else
            render json: {errors: ["User not authorized"]}, status: :unauthorized
        end
    end

    # Private methods
    private

    # Find a donation
    def find_donation
        Donation.find(params[:id])
    end

    # Parameters allowed for donation
    def donation_params
        params.permit(:amount, :donation_request_id, :user_id)
    end

    # Render error if donation is not found
    def donation_not_found
        render json: {errors: ["Donation not found"]}, status: :not_found
    end
end
