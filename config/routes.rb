Rails.application.routes.draw do
  
  namespace :api do
    resources :users

    get '/:id/adventures', to: 'users#Adventures'
  end

end