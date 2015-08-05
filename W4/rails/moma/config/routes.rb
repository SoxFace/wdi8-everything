Rails.application.routes.draw do
  root :to => 'artists#index'
  # resources :artists
  # resources :works
  resources :artists, :works

end
