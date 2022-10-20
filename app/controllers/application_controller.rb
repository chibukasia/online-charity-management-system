class ApplicationController < ActionController::API
    include ActionController::Cookies
    wrap_parameters format: []
end
