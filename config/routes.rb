Rails.application.routes.draw do
  root 'pages#directives'

  get '/api/countries', to: 'api#countries'
  get '/api/get_user', to: 'api#get_user'
  post '/api/save_user', to: 'api#save_user'
  get '/api/get_all_users', to: 'api#get_all_users'
  delete '/api/delete_user', to: 'api#delete_user'

  get '/directives', to: 'pages#directives'
  get '/filters', to: 'pages#filters'
  get '/forms', to: 'pages#forms'
  get '/routes', to: 'pages#routes'
  get '/animate', to: 'pages#animate'
  get '/pagination', to: 'pages#pagination'

  get '/references', to: 'pages#references'
end
