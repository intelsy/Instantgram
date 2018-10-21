Rails.application.routes.draw do
  devise_for :users

  root 'main#index'

  get 'post', to: 'posts#index'
  post 'api/images', to: 'api/post#create'
end
