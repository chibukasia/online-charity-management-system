class ApplicationController < ActionController::API
    include ActionController::Cookies
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :response_to_unprocessable_entity
    

    # Privates 
    private 

    # Sends an arrays of error messages for invalid entries
    def response_to_unprocessable_entity(invalid) 
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity 
    end
end
