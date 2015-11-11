class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: User.all.order(:first_name)
  end

  def show
    user = User.find_by_first_name(params[:id])

    render json: user.as_json
  end

  def update
    user = User.where(first_name: params[:user][:first_name]).first
    user = User.new if user.nil?

    user.update(user_params)

    render json: user.as_json
  end

  def create
    user = User.create(user_params)

    render json: user.as_json
  end

  def destroy
    User.find(params[:id]).destroy!

    render nothing: true
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :email, :color, :is_cool)
  end
end