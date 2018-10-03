class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render @user.error.full_messages, status: 422
    end
  end
  
  def update
    @user = User.find(params[:id])
    
    if @user.update_attributes(user_params)
      render "api/users/show"
    else 
      render @user.error.full_messages, status: 422
    end
  end


  def user_params
    params.require(:user).permit(:username, :email, :password, :photo)
  end
end