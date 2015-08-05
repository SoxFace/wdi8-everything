Rails.application.routes.draw do
  # Static pages in my home controller:
  root :to => 'pages#home' # rails way of making a homepage
  get '/home' => 'pages#home' # pages = controller, home = action/method
  get '/about' => 'pages#about'
  get '/faq' => 'pages#faq'
  get '/ralph' => 'pages#ralph'

  # This is CRUD for butterflies:
  get '/butterflies' => 'butterflies#index'
  get '/butterflies/new' => 'butterflies#new'
  get '/butterflies/faq' => 'butterflies#faq'

  # Stuff about cars
  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calc#calculate'
end
