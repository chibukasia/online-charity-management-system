class CategoriesController < ApplicationController

    # skip_before_action :authorize, only: [:create]

    rescue_from ActiveRecord::RecordNotFound, with: :category_not_found
    # GET all the categories
    def index
        categories = Category.all
        render json: categories, status: :ok
    end
    # GET one category
    def show
        category = find_category
        render json: category, status: :ok
    end

    # POST a new category
    def create
        if session[:role] == "admin"
            category = Category.create!(category_params)
            render json: {body: category, message: "Category added succesfully!"}, status: :created
        else
            unauthorized_admin
        end
    end

    # PATCH a category
    def update
        category = find_category
        if session[:role] == "admin"
            category.update!(category_params)
            render json: category, status: :accepted
        else
            unauthorized_admin
        end
    end

    # Private methods
    private

    # find a category
    def find_category
        Category.find(params[:id])
    end

    # Allowed parameters
    def category_params
        params.permit(:category_name)
    end

    # Category not found
    def category_not_found
        render json: {errors: ["Category not found"]}, status: :not_found
    end

    def unauthorized_admin 
        render json: {errors: ["Not authorized to perform action"]}, status: :unauthorized
    end
end
