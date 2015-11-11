Rails.application.routes.draw do
  root 'pages#directives'

  namespace :api do
    resources 'countries', only: [:index]
    resources 'users', only: [:index, :show, :update, :destroy]
  end

  get '/directives', to: 'pages#directives'
  get '/filters', to: 'pages#filters'
  get '/forms', to: 'pages#forms'
  get '/routes', to: 'pages#routes'
  get '/animate', to: 'pages#animate'
  get '/pagination', to: 'pages#pagination'

  get '/references', to: 'pages#references'
end
