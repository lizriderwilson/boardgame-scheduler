class Api::V1::UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.create(user_params)
    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: UserSerializer.new(user)
      }
    else
      render json: {
        status: :unprocessable_entity,
        error: 'failed to create user' }
    end
  end

  def show
    user = User.find(params["id"])
    render json: user
  end

  def update
    user = User.find_by(id: params["id"])
    user.update(username: params["username"])
    render json: user
  end

  def destroy
    user = User.find_by(id: params["id"])
    user.delete
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end

end
