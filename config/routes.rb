Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:show, :create]
    resource :session, only: [:create, :destroy, :show]
    resources :channels, only: [:index, :show, :create, :destroy]
    resources :messages, only: [:index, :create, :destroy, :show]
  end

  get 'api/users/', to: 'api/users#alluser'
  post 'api/channels/:id/subscribe', to: 'api/channels#subscribe'
  delete 'api/channels/:id/unsubscribe', to: 'api/channels#unsubscribe'
  post 'api/channels/subscribe', to: 'api/channels#create_dm'
  root "static_pages#root"
end
