Rails.application.routes.draw do


  devise_for :users
  root to: 'pages#home'

  resources :projects do
    resources :texts, only: [:index, :update, :new, :create]
  end

  scope shallow_prefix: "sekret" do
  resources :projects do
    resources :texts, only: [:edit, :show], shallow: true
  end
end
  resources :texts, only: [:destroy]
   # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end



