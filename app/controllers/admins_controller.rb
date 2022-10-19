class AdminsController < ApplicationController

rescue from ActiveRecord::RecordNotFound, with: :admin_not_found

  #getting all the admins
  def index
    admins = Admin.all
    render json: admins, status: :ok
  end

  #posting a new admin
  def create
    admin = Admin.create(admin_params)
    render json: admin, status: :created
  end

  #patching a new admin
  def update
    admin = find_admin
    admin.update(admin_params)
    render json: admin, status: :accepted
  end

  #gatting an admin
  def show
    admin = find_admin
    render json: admin, status: :ok
  end

  #deleting an admin
  def destroy
    admin = find_admin
    admin.destroy
    head :no_content
  end

  #the private methods
  private

  #find the admin
  def find_admin
    Admin.find(params(:id))
  end

  allowed params
  def admin_params
    params.permit(:username, :password, :password_confirmation)
  end

  #admin not found
  def admin_not_found
    render json: {errors: ["Admin not found"]}, status: :not_found
  end

end
