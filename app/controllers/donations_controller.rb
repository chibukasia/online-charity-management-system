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
    # def ngo_donations
    #     user = User.find(session[:user_id]) # find user in session
    #     if user.role == "ngo"
    #         ngo = Ngo.find_by(user_id: user.id) 

    #         donations = Donation.all
    #         render json: donations

    #         ids = []
    #         requests = DonationRequest.where(ngo_id: ngo.id)

    #         requests.each do |request| 
    #             data << request.id
    #         end
            
    #         p ids 
    #         binding.break
    #         # if  requests # check if the request is found
    #         #     donation_array = []
    #         #     requests.each do |request|
    #         #         # donations = Donation.where(donation_request_id: request.id).order(created_at: :desc)
    #         #         # donation_array << donations 
    #         #         puts request.id
    #         #         print donation_array
    #         #         binding.break
    #         #     end
                
    #         #     # p donations
    #         #     # binding.break
    #         #     render json: donation_array, status: :ok 
    #         # else
    #         #     render json: {errors: ["User not authorized"]}, status: :unauthorized
    #         # end
    #     else
    #         render json: {error: "Unauthorized user"}, status: :not_found
    #     end
    # end

    # User donations
    def user_donations
        user = User.find(session[:user_id]) # find user in session
        if user 
            donations = Donation.where(user_id: user.id).order(created_at: :desc)
            render json: donations, status: :ok, each_serializer: NgoCustomDonationSerializer
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
