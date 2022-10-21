class AdminSessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    # Login an admin 
    def create 
        admin = Admin.find_by(username: params[:username])
        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id 
            session[:role] = "admin"
            render json: admin, status: :created
        else
            render json: {errors: ["Invalid username or password"]}
        end
    end 

    # Get admin in session 
    def show 
        admin = Admin.find(session[:admin_id])

        # check if the admin exists
        if admin
            render json: admin, status: :ok
        else
            render json: {errors: ["User unauthorized"]}, status: :unauthorized
        end
    end

    # Log out an admin from session
    def destroy
        session.delete :admin_id
        session.delete :role 
        head :no_content
    end
end
