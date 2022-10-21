class DonationsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :donation_not_found

    # GET all the donations
    def index
        donations = Donation.all
        render json: donations, status: :ok
    end

    # GET one donation
    def show
        donation = find_donation
        render json: donation, status: :ok
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

    # DELETE a donation
    def destroy
        donation = find_donation
        donation.destroy
        head :no_content
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
