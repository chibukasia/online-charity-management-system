class AdminsController < ApplicationController
  def index
    admin = Admin.all
    render json: admin, status: :ok
  end

  def create
    admin = Admin.create!(admin_params)
    render json: admin, status: :created
  end

  def update
    admin = Admin.update(admin_params)
    render json: admin, status: :ok
  end

  def show
    admin = Admin.find_by(id: params[:id])
    if admin
      render json: admin, status: :ok
    else
      render json: { error: "Admin not found" }, status: :not_found
    end
  end

  def destroy
    admin = Admin.find_by(id: params[:id])
    admin.destroy
    head :no_content
  end

end
