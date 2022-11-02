class AdminsController < ApplicationController
skip_before_action :authorize, only: [:create, :index]

  #getting all the admins
  def index
    admins = Admin.all
    render json: admins, status: :ok
  end

  #posting a new admin
  def create
    admin = Admin.create!(admin_params)
    token = encode_token(admin_id: admin.id)
    render json: {admin: admin, jwt: token}, status: :created
  end

  #patching a new admin
  def update
    admin = current_admin
    admin.update!(admin_params)
    render json: admin, status: :accepted
  end

  #gatting an admin
  def show 
    render json: current_admin, status: :ok
  end

  #deleting an admin
  def destroy
    current_admin.destroy
    head :no_content
  end

  #the private methods
  private

  # allowed params
  def admin_params
    params.permit(:username, :password, :password_confirmation)
  end

end
