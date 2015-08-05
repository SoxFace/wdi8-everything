Rails.application.routes.draw do
  root :to => "pages#index"
  post '/search' => "pages#search"
end
