Rails.application.routes.draw do
  root 'pages#directives'

  get '/directives', to: 'pages#directives'
end
