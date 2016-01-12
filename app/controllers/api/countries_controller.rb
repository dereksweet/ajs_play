class Api::CountriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    page = params[:page] || 1

    lower = (page.to_i-1)*15
    upper = (page.to_i-1)*15+14

    render json: { total: Country.all.count, models: Country.all[lower..upper] }
  end
end