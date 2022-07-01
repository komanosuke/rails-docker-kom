Rails.application.routes.draw do
  devise_for :accounts
  get '/', to: 'hello#index'
  get 'hello', to: 'hello#index'
  get 'hello/index'
  get 'hello/login_check'
  get 'hello/study_page'
  get 'hello/japanese'
  get 'hello/japanese_elem'
  get 'hello/japanese_j_high'
  get 'hello/japanese_high'
  get 'hello/math'
  get 'hello/math_elem'
  get 'hello/math_j_high'
  get 'hello/math_high'
  get 'hello/social_studies'
  get 'hello/social_studies_elem'
  get 'hello/social_studies_j_high'
  get 'hello/social_studies_high'
  get 'hello/science'
  get 'hello/science_elem'
  get 'hello/science_j_high'
  get 'hello/science_high'
  get 'hello/english'
  get 'hello/english_elem'
  get 'hello/english_j_high'
  get 'hello/english_high'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
