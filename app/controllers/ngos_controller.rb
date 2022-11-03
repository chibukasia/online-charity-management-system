class NgosController < ApplicationController

    # skip_before_action :authorize, only: [:]

    rescue_from ActiveRecord::RecordNotFound, with: :ngo_not_found
    rescue_from ActiveRecord::RecordNotSaved, with: :record_not_saved

    # GET all the NGOs
    def index
        ngos = Ngo.all
        render json: ngos, status: :ok
    end

    # GET one NGO
    def show
        ngo = find_ngo
        render json: ngo, status: :ok
    end

    # POST a new NGO
    def create
        user = current_user
        if user && user.role == 'ngo'
            ngo = user.create_ngo!(ngo_params)
            from = "chibukasianelson@gmail.com"
            subject = "Organization registration"
            content = "You have successfull registered your organization: #{ngo.organization_name}, with us. Welcome to our charity services"
            EmailService.call(from: from, to: current_user.email, subject: subject, content: content)
            #user.ngo = ngo
            render json: ngo, status: :created
        else
            render json: {errors: ["You do not have previlledges to register an NGO"]}, status: :unauthorized
        end
    end

    # PATCH an NGO
    def update
        ngo = find_ngo
        ngo.update!(ngo_params)
        from = "chibukasianelson@gmail.com"
        subject = "Organization Details Update"
        content = "Your organization details have been updated succesfully"
        EmailService.call(from: from, to: current_user.email, subject: subject, content: content)
        render json: {message: "Ngo updated successfullly", body: ngo}, status: :accepted
    end

    # DELETE an NGO
    def destroy
        ngo = find_ngo
        ngo.destroy
        head :no_content
    end

    # GET NGO of a logged in NGO
    def session_ngo 
        user = current_user
        if user && user.role == "ngo"
            ngo = Ngo.find_by(user_id: user.id)
            render json: ngo, status: :ok
        else
            render json: {errors: ["You do not have the required previlledges"]}, status: :unauthorized
        end
    end
    # Private methods
    private

    # Find an NGO
    def find_ngo
        Ngo.find(params[:id])
    end

    # Permit params for NGO
    def ngo_params
        params.permit(:organization_name, :address, :organization_phone_number, :organization_email, :registration_number, :description, :user_id)
    end

    # Render error if no NGO is found
    def ngo_not_found
        render json: {errors: ["NGO not found"]}, status: :not_found
    end

    #private
    private

    def record_not_saved(invalid)
        render json: {errors: invalid.record.errors.full_messages}
    end
end
