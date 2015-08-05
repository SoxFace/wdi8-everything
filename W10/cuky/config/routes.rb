Rails.application.routes.draw do
  get 'pages/index'

  devise_for :users
  root :to => 'pages#index'
end
