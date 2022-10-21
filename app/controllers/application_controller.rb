class ApplicationController < ActionController::API

    before_action :authorize
    
    include ActionController::Cookies
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :response_to_unprocessable_entity


    # Privates
    private

    #authorize user
    def authorize
        render json: { errors: ["You must login or sign up to continue"]}, status: :unauthorized unless session.include? :user_id
    end

    # Sends an arrays of error messages for invalid entries
    def response_to_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
