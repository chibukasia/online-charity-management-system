Rails.application.routes.draw do
  resources :donations
  resources :donation_requests
  resources :ngos
  resources :categories
  resources :admins
  resources :users, only: [:index, :destroy, :update, :show]
  # route for latest approved and open requests
  get '/latest_approved_requests', to: 'donation_requests#latest_approved_requests'
  # route for all approved and open requests
  get '/approved_open_requests', to: 'donation_requests#approved_open_requests'
  # route for NGOs donation requests 
  get '/ngo_requests', to: 'donation_requests#ngo_requests'
  # route for ngo specific donations 
  get '/ngo_donations', to: 'donations#ngo_donations'
  # route for user sign up
  post '/user_signup', to: 'users#create'
  # route for user login
  post '/user_login', to: 'sessions#create'
  # route to get user in session
  get '/user_me', to: 'sessions#show'
  # route to logout user in session
  delete '/user_logout', to: 'sessions#destroy'
  # route to create a new admin
  post '/admin_signup', to: 'admins#create'
  # route to login admin
  post '/admin_login', to: 'admin_sessions#create'
  # route to get admin in session
  get '/admin', to: 'admin_sessions#show'
  # route to logout admin in session
  delete '/admin_logout', to: 'admin_sessions#destroy'
  # Get NGO of a user in session
  get '/session_ngo', to: 'ngos#session_ngo'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
