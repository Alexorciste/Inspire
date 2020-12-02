Rails.application.routes.draw do


  devise_for :users
  root to: 'pages#home'

  resources :projects do
    resources :texts, only: [:index, :update, :new, :create]
    resources :bands, only: [:new, :create, :edit]
  end

  scope shallow_prefix: "sekret" do
    resources :texts, only: [:edit, :show], shallow: true
end
  resources :texts, only: [:destroy]
   # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end



