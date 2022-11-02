class AdminSessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    # Login an admin 
    def create 
        admin = Admin.find_by(username: params[:username])
        if admin&.authenticate(params[:password])
            token = encode_token({admin_id: admin.id})
            render json: {admin: admin, jwt: token}, status: :accepted
        else
            render json: {errors: ["Invalid username or password"]}
        end
    end 
end
