Rails.application.routes.draw do
  root 'pages#directives'

  namespace :api do
    namespace :v1 do
      resources 'countries', only: [:index]
      resources 'users' do
        post :update, on: :member, as: nil
      end
    end
  end

  get '/directives', to: 'pages#directives'
  get '/filters', to: 'pages#filters'
  get '/forms', to: 'pages#forms'
  get '/routes', to: 'pages#routes'
  get '/uirouter', to: 'pages#uirouter'
  get '/animate', to: 'pages#animate'
  get '/pagination', to: 'pages#pagination'

  get '/references', to: 'pages#references'
end
