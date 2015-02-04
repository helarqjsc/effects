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
      expect(Video.count).to eq(6)
    end

    it "doesn't add a record to DB without params" do
      post(:create, {})
      expect(response).to have_http_status(400)
    end
  end

  describe 'GET #show' do
    before :each do
      get(:show, {id: 1})
    end

    it 'responds successfully with an HTTP 200 status code' do
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it 'displays a proper JSON for a single video' do
      expect(JSON.parse(response.body)['title']).to eq(Video.first.title)
    end
  end

  describe 'PUT #update' do
    before :each do
      @video = Video.first
      @new_params = {title: @video.title + 'vika', url: @video.url + 'nyashka'}
    end

    it 'responds successfully with an HTTP 200 status code' do
      put(:update, {id: 1}.merge(@new_params))
      expect(response).to have_http_status(200)
    end

    it 'successfully updates a row' do
      put(:update, {id: 1}.merge(@new_params))
      expect(Video.first.title).to eq(@new_params[:title])
      expect(Video.first.url).to eq(@new_params[:url])
    end

    it 'returns HTTP 404 on non-existent id' do
      put(:update, {id: 1488}.merge(@new_params))
      expect(response).to have_http_status(404)
    end
  end

  describe 'DELETE #destroy' do
    it 'successfully removes a row' do
      video_old = Video.first
      delete(:destroy, {id: 1})
      expect(response).to have_http_status(200)
      expect(video_old).to_not eq(Video.first)
      expect(Video.count).to eq(4)
    end

    it 'returns HTTP 404 on non-existent id' do
      delete(:destroy, {id: 1488})
      expect(response).to have_http_status(404)
      expect(Video.count).to eq(5)
    end
  end
end