Rails.application.routes.draw do


  devise_for :users
  root to: 'pages#home'

  #resources :projects do
  resources :texts
    #resources :bands, only: [:new, :create, :edit] do
      #collection do
        #get :search
    #end
  #end
  #end

  #scope shallow_prefix: "sekret" do
    #resources :texts, only: [:edit, :show], shallow: true
  #nd

  resources :texts, only: [:destroy]
   # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

   namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get "/synonymes", to: "synonymes#find_synonyme"
      get "/rimes", to: "synonymes#find_rime"
    end
  end

  end



