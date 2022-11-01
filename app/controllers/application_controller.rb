class ApplicationController < ActionController::API

    before_action :authorize
    
    include ActionController::Cookies
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :response_to_unprocessable_entity


    # Encode the user data to create a payload
    def encode_token(payload)
        JWT.encode(payload, 'user')
    end

    def auth_header 
        request.headers['Authorization']
    end

    # Decode the token 
    def decoded_token
        if auth_header
            token = auth_header.split(' ')[1] 

            begin
                JWT.decode(token, 'user', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil 
            end
        end
    end

    # Get the current user 
    def current_user 
        if decoded_token
            user_id = decoded_token[0]['user_id'] 
            user = User.find_by(id: user_id)
        end
    end

    def current_admin
        if decoded_token
            admin_id = decoded_token[0]['admin_id']
            admin = Admin.find_by(id: admin_id)
        end
    end

    def logged_in? 
        !!current_user || !!current_admin
    end
    # Privates
    private

    #authorize user
    def authorize      
        render json: { errors: ["You must login or sign up to continue"]}, status: :unauthorized unless logged_in?
    end

    # Sends an arrays of error messages for invalid entries
    def response_to_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity 
    end
end
