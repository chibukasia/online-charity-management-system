class SessionsController < ApplicationController

  skip_before_action :authorize, only: [:create]

  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
  #creating a user login session
  def create
    user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password]) #check if it's a valid user
        token = encode_token({user_id: user.id})
        render json: {user: user, jwt: token}, status: :accepted
      else
        render json: {errors: ["Invalid username or password"]}, status: :unauthorized
      end
  end

  #private methods
  private

  #user not_found
  def user_not_found
    render json: {errors: ["User unauthorized"]}, status: :unauthorized
  end
end
