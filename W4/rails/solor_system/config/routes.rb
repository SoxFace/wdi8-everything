Rails.application.routes.draw do
  root :to => 'planets#index'

  # READ
  get 'planets' => 'planets#index'
  # CREATE
  get 'planets/new' => 'planets#new'
  post 'planets' => 'planets#create'
  # READ
  get '/planets/:id' => 'planets#show', :as => 'planet'
  # DELETE
  post '/planets/:id/delect' => 'planets#destroy', :as => 'planet_delete'
  # EDIT
  get '/planets/:id/edit' => 'planets#edit', :as => 'planet_edit'
  # UPDATE
  post '/planets/:id' => 'planets#update'
end
