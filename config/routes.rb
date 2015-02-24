Rails.application.routes.draw do
  root 'pages#directives'

  get '/directives', to: 'pages#directives'
  get '/filters', to: 'pages#filters'
  get '/forms', to: 'pages#forms'
end
