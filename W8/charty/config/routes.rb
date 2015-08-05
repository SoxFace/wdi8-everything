Rails.application.routes.draw do
  if @current_user.present?
    root :to => 'pages#dashboard'

  get '/weather' => 'pages#weather'

  resources :temperatures, :only => [:index] do
    collection do
      get 'max'
      get 'min'
    end
  end

end