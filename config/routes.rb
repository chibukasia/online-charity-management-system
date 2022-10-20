Rails.application.routes.draw do
  resources :donations
  resources :donation_requests
  resources :ngos
  resources :categories
  resources :admins
  resources :users
  get '/latest_approved_requests', to: 'donation_requests#latest_approved_requests'
  get '/approved_open_requests', to: 'donation_requests#approved_open_requests'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
