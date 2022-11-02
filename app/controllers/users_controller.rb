# require 'sendgrid-ruby'
# include SendGrid
class UsersController < ApplicationController

  skip_before_action :authorize, only: [:create, :index]

  #getting all users
  def index
    users = User.all
    render json: users, status: :ok
  end

  #posting a new user
  def create
    user = User.create!(user_params)
    token = encode_token(user_id: user.id)

    @from = "chibukasianelson@gmail.com"
    @subject = "New User Account"
    @content = "Thank you for registering with us #{user.first_name} #{user.last_name}. Your account has been created successfully"
    EmailService.call(from: @from, to: user.email, subject: @subject, content: @content)

    # UserNotifierMailer.send_signup_email(user).deliver
    render json: {user: user, jwt: token}, status: :created
  end

  #patching a new user
  def update
    user = current_user
    user.update!(user_params)
    render json: {message: "Profile updated successfully", body: user}, status: :accepted
  end

  #getting one user
  def show
    render json: current_user, status: :ok
  end

  #deleting a user
  def destroy  
    current_user.destroy
    head :no_content
  end

  #the private methods
  private

  #allowed params
  def user_params
    params.permit(:first_name, :last_name, :username, :email, :phone_number, :role, :password, :password_confirmation)
  end


end
