class NgosController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :ngo_not_found

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
        ngo = Ngo.create!(ngo_params) 
        render json: ngo, status: :created
    end 

    # PATCH an NGO
    def update 
        ngo = find_ngo
        ngo.update!(ngo_params)
        render json: ngo, status: :accepted
    end 

    # DELETE an NGO
    def destroy 
        ngo = find_ngo 
        ngo.destroy
        head :no_content
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
end
