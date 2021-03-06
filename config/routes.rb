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
  delete 'api/notification', to: 'api/channels#edit_noti'
  get 'api/notification', to: 'api/channels#noti_index'
  post 'api/online', to: 'api/sessions#go_online'
  post 'api/offline', to: 'api/sessions#go_offline'
  get 'api/onlineChannel', to: 'api/channels#online_channel_index'
  # get 'api/channels/subscribe', to: 'api/channels#dm_show'
  root "static_pages#root"
end
