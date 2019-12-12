Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :show]
    resources :watchlists, only: [:show, :create, :destroy]

    get 'videos/search/:query', to: 'videos#search'
  end
end
