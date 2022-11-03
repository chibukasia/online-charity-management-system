class DonationsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :donation_not_found

    # GET all the donations
    def index
        donations = Donation.all
        render json: donations, status: :ok, include: ['user','donation_request', 'donation_request.ngo', 'donation_request.category']
    end

    # GET one donation
    def show
        donation = find_donation
        render json: donation, status: :ok, serializer: NgoCustomDonationSerializer
    end

    # POST a new donation
    def create
        user = current_user
        if user && user.role == 'donor'
            donation = user.donations.create!(donation_params)
            # pass client_token to your front-end
            @client_token = gateway.client_token.generate(customer_id: a_customer_id)
            from = "chibukasianelson@gmail.com"
            subject = "Donations Made"
            content = "Thank you for being a cheerful giver and kind-hearted. We have received you donation of amount KSH: #{donation.amount}"
            EmailService.call(from: from, to: current_user.email, subject: subject, content: content)
            render json: donation, status: :created, include: ['user','donation_request', 'donation_request.ngo', 'donation_request.category']
        else
            render json: {errors: ["You do not have access rights to donate"]}, status: :unauthorized
        end
    end

    # PATCH a donation
    def update
        donation = find_donation
        donation.update!(donation_params)
        render json: donation, status: :accepted, include: ['user','donation_request', 'donation_request.ngo', 'donation_request.category']
    end

    # User donations
    def user_donations
        user = current_user # find user in session
        if user && user.role
            donations = Donation.where(user_id: user.id).order(created_at: :desc)
            render json: donations, status: :ok, include: ['user','donation_request', 'donation_request.ngo', 'donation_request.category']
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
