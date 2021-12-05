Rails.application.routes.draw do
  root to: proc { [404, {}, ["Not found."]] }

  namespace 'api' do
    namespace 'v1' do
      resources :ais, only: [:index, :create, :show, :update]
    end
  end
end
