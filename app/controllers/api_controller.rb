class ApiController < ApplicationController

  skip_before_action :verify_authenticity_token

  def get_data
    datum = SampleDatum.find_by_first_name(params[:first_name])

    render json: datum.as_json
  end

  def save_data
    datum = SampleDatum.where(first_name: params[:first_name]).first
    datum = SampleDatum.new if datum.nil?

    datum.first_name = params[:first_name]
    datum.email = params[:email]
    datum.color = params[:color]
    datum.is_cool = params[:is_cool]
    datum.save!

    render json: { result: 'success' }
  end

end
