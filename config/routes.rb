Rails.application.routes.draw do

  namespace :api, default: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end
  root "static_pages#root"
end
