class AdminSessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    # Login an admin 
    def create 
        admin = Admin.find_by(username: params[:username])
        if admin&.authenticate(params[:password])
            token = encode_token({admin_id: admin.id})
            # session[:admin_id] = admin.id 
            # session[:role] = "admin"
            render json: {admin: admin, jwt: token}, status: :accepted
        else
            render json: {errors: ["Invalid username or password"]}
        end
    end 

    # Get admin in session 
    # def show 
    #     if current_admin
    #         render json: current_admin, status: :ok
    #     else
    #         render json: {errors: ["User unauthorized"]}, status: :unauthorized
    #     end
    # end

    # Log out an admin from session
    def destroy
        # session.delete :admin_id
        # session.delete :role 
        # head :no_content
    end
end
