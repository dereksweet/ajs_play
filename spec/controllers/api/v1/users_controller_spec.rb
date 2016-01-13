require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  render_views

  let! (:user1) { User.create(first_name: 'test1', email: 'test1@test.com', color: 'blue', is_cool: true) }
  let! (:user2) { User.create(first_name: 'test2', email: 'test2@test.com', color: 'red', is_cool: false) }

  describe 'GET #index' do
    before { get :index, format: :json }

    it_behaves_like 'api_response'

    it 'should return the two users' do
      expect(json_response.count).to eq(2)
      expect(json_response.first['first_name']).to eq(user1.first_name)
      expect(json_response.last['first_name']).to eq(user2.first_name)
    end
  end

  describe 'GET #show' do
    before { get :show, id: user1.first_name, format: :json }

    it_behaves_like 'api_response'

    it 'should return the specified user' do
      expect(json_response['first_name']).to eq(user1.first_name)
    end
  end

  describe 'PUT #update' do
    describe 'for an existing user' do
      before { put :update, id: user1.first_name, user: { first_name: 'test1', email: 'testX@test.com', color: 'blue', is_cool: true }, format: :json }

      it_behaves_like 'api_response'

      it 'should update the users email' do
        expect(User.find_by_first_name('test1').email).to eq('testX@test.com')
      end
    end

    describe 'for a non-existing user' do
      before { put :update, id: 'test3', user: { first_name: 'test3', email: 'test3@test.com', color: 'blue', is_cool: true }, format: :json }

      it_behaves_like 'api_response'

      it 'should create a new user with the specified params' do
        expect(User.count).to eq(3)

        new_user = User.find_by_first_name('test3')
        expect(new_user.email).to eq('test3@test.com')
        expect(new_user.color).to eq('blue')
        expect(new_user.is_cool).to eq(true)
      end
    end
  end

  describe 'PUT #update' do
    before { post :create, user: { first_name: 'test3', email: 'test3@test.com', color: 'blue', is_cool: true }, format: :json }

    it_behaves_like 'api_response'

    it 'should create a new user with the specified params' do
      expect(User.count).to eq(3)

      new_user = User.find_by_first_name('test3')
      expect(new_user.email).to eq('test3@test.com')
      expect(new_user.color).to eq('blue')
      expect(new_user.is_cool).to eq(true)
    end
  end

  describe 'DELETE #destroy' do
    before { delete :destroy, id: user2.id, format: :json }

    it 'should destroy the specified user' do
      expect(User.count).to eq(1)
      expect(User.find_by_first_name(user2.first_name)).to be_nil
    end
  end
end