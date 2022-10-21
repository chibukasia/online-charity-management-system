Rails.application.routes.draw do
  resources :donations
  resources :donation_requests
  resources :ngos
  resources :categories
  resources :admins
  resources :users, only: [:index, :destroy, :update, :show]
  get '/latest_approved_requests', to: 'donation_requests#latest_approved_requests'
  get '/approved_open_requests', to: 'donation_requests#approved_open_requests'
  post '/user_signup', to: 'users#create'
  post '/user_login', to: 'sessions#create'
  get '/user_me', to: 'sessions#show'
  delete '/user_logout', to: 'sessions#destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
