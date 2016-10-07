Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:show, :create]
    resource :session, only: [:create, :destroy, :show]
    resources :channels, only: [:index, :show, :create, :destroy]
    resources :messages, only: [:index, :create, :destroy]
  end

  root "static_pages#root"
end
