Rails.application.routes.draw do
  root 'pages#directives'

  get '/api/countries', to: 'api#countries'
  get '/api/get_datum', to: 'api#get_datum'
  post '/api/save_datum', to: 'api#save_datum'
  get '/api/get_all_data', to: 'api#get_all_data'
  delete '/api/delete_datum', to: 'api#delete_datum'

  get '/directives', to: 'pages#directives'
  get '/filters', to: 'pages#filters'
  get '/forms', to: 'pages#forms'
  get '/routes', to: 'pages#routes'
  get '/animate', to: 'pages#animate'
  get '/pagination', to: 'pages#pagination'

  get '/references', to: 'pages#references'
end
