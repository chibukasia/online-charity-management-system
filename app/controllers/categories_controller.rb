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
        category = Category.create!(category_params)
        render json: category, status: :created
    end

    # PATCH a category
    def update
        category = find_category
        category.update!(category_params)
        render json: category, status: :accepted
    end

    # DELETE a category
    def destroy
        category = find_category
        category.destroy
        head :no_content
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
end
