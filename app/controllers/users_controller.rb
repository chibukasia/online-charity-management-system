class UsersController < ApplicationController

  skip_before_action :authorize, only: [:create, :index]

  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found

  #getting all users
  def index
    users = User.all
    render json: users, status: :ok
  end

  #posting a new user
  def create
    user = User.create!(user_params)
    #user sessions
    session[:user_id] = user.id
    session[:role] = user.role
    render json: user, status: :created
  end

  #patching a new user
  def update
    user = find_user
    user.update!(user_params)
    render json: user, status: :accepted
  end

  #getting one user
  def show
    user = find_user
    render json: user, status: :ok
  end

  #deleting a user
  def destroy
    user = find_user
    user.destroy
    head :no_content
  end

  #the private methods
  private

  #find user
  def find_user
    User.find(session[:user_id])
  end

  #allowed params
  def user_params
    params.permit(:first_name, :last_name, :username, :email, :phone_number, :role, :password, :password_confirmation)
  end

  #user not found
  def user_not_found
    render json: {errors: ["User not found"]}, status: :not_found
  end

end
