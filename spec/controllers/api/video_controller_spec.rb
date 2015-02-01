require 'rails_helper'

RSpec.describe Api::VideoController, :type => :controller do
  before :all do
    5.times{ create(:video) }
  end

  describe 'GET #index' do
    before :each do
      get :index
    end    

    it 'responds successfully with an HTTP 200 status code' do
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it 'returns valid JSON' do
      expect(JSON.parse(response.body).length).to eq(5)
    end
  end

  describe 'POST #create' do
    it 'adds a record to DB' do
      post(:create, FactoryGirl.attributes_for(:video))
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end
  end


end