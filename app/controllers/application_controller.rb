class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  # upcoming requests will have underscore params
  # before_action :underscore_params!
  # respond_to? :json
   
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  # Incoming keys need to be changed into snack
# https://thinkster.io/tutorials/rails-json-api/configuring-rails-as-a-json-api
  # def underscore_params!
  #   params.deep_transform_keys!(&:underscore)
  # end
end
