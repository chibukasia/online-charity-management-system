class SessionsController < ApplicationController

  skip_before_action :authorize, only: [:create]

  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
  #creating a user login session
  def create
    user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password]) #check if it's a valid user
        session[:user_id] = user.id
        session[:role] = user.role
        render json: user, status: :created
      else
        render json: {errors: ["Invalid username or password"]}, status: :unauthorized
      end
  end

  #getting user in the session
  def show
    user = find_user
    render json: user, status: :ok
  end

  #log out user ins session
  def destroy
    session.delete :user_id
    head :no_content
  end

  #private methods
  private

  def find_user
    User.find(session[:user_id])
  end

  #user not_found
  def user_not_found
    render json: {errors: ["User unauthorized"]}, status: :unauthorized
  end
end
