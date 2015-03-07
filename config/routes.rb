Rails.application.routes.draw do
  root 'pages#directives'

  get '/api/get_data', to: 'api#get_data'
  post '/api/save_data', to: 'api#save_data'

  get '/directives', to: 'pages#directives'
  get '/filters', to: 'pages#filters'
  get '/forms', to: 'pages#forms'
  get '/routes', to: 'pages#routes'
  get '/animate', to: 'pages#animate'
end
