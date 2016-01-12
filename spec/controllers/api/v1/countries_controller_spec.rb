require 'rails_helper'

RSpec.describe Api::V1::CountriesController, type: :controller do
  render_views

  describe 'GET #index' do
    describe 'with no params' do
      before { get :index, format: :json }

      it_behaves_like 'api_response'

      it 'should return at least 1 countries' do
        expect(json_response['total']).to be > 1
      end

      it 'returns a list of countries' do
        expect(json_response['models'].count).to be > 1
      end
    end

    describe 'with valid page param' do
      before { get :index, page: 2, format: :json }

      it_behaves_like 'api_response'

      it 'should return at least 1 countries' do
        expect(json_response['total']).to be > 1
      end
    end

    describe 'with invalid page param' do
      before { get :index, page: 999, format: :json }

      it_behaves_like 'api_response'

      it 'should not return any countries' do
        expect(json_response['models']).to be_nil
      end
    end
  end
end