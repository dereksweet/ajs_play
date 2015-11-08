class ApiController < ApplicationController

  skip_before_action :verify_authenticity_token

  def get_all_users
    render json: User.all.order(:first_name)
  end

  def get_user
    user = User.find_by_first_name(params[:first_name])

    render json: user.as_json
  end

  def save_user
    user = User.where(first_name: params[:first_name]).first
    user = User.new if user.nil?

    user.first_name = params[:first_name]
    user.email = params[:email]
    user.color = params[:color]
    user.is_cool = params[:is_cool]
    user.save!

    render json: { result: 'success' }
  end

  def delete_user
    User.where(first_name: params[:first_name]).first.destroy!

    render json: { result: 'success' }
  end

  def countries
    page = params[:page] || 1

    lower = (page.to_i-1)*15
    upper = (page.to_i-1)*15+14
    render json: { total_entries: Country.all.count, models: Country.all[lower..upper] }
  end

end
