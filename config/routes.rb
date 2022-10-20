Rails.application.routes.draw do
  resources :donations
  resources :donation_requests
  resources :ngos
  resources :categories
  resources :admins
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
