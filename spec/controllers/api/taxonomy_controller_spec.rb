require 'rails_helper'

RSpec.describe Api::TaxonomyController, :type => :controller do
	before :all do
	  3.times{ create(:category) }
	  5.times{ create(:tag) }
	end

	describe 'GET #index' do
	  before :each do
	  	@request.env["devise.mapping"] = Devise.mappings[:user]
	  	@admin = FactoryGirl.create(:admin)	  
	  	sign_in @admin
	    get :index
	  end

	  it 'responds successfully with an HTTP 200 status code' do
	    expect(response).to be_success
	    expect(response).to have_http_status(200)
	  end

	  it 'returns valid JSON' do
	    expect(JSON.parse(response.body).length).to eq(8)
	  end
	end

	describe 'POST #create' do
	  it 'adds a record to DB' do
	    post(:create, FactoryGirl.attributes_for(:category))
	    expect(response).to be_success
	    expect(response).to have_http_status(200)
	    expect(Taxonomy.count).to eq(9)
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

	  it 'displays a proper JSON for a single Taxonomy' do
	    expect(JSON.parse(response.body)['name']).to eq(Taxonomy.first.name)
	  end
	end

	describe 'PUT #update' do
	  before :each do
	    @tax = Taxonomy.first
	    @new_params = {name: @tax.name + 'vika', slug: @tax.slug + 'nyashka'}
	  end

	  it 'responds successfully with an HTTP 200 status code' do
	    put(:update, {id: 1}.merge(@new_params))
	    expect(response).to have_http_status(200)
	  end

	  it 'successfully updates a row' do
	    put(:update, {id: 1}.merge(@new_params))
	    expect(Taxonomy.first.name).to eq(@new_params[:name])
	    expect(Taxonomy.first.slug).to eq(@new_params[:slug])
	  end

	  it 'returns HTTP 404 on non-existent id' do
	    put(:update, {id: 1488}.merge(@new_params))
	    expect(response).to have_http_status(404)
	  end
	end

	describe 'DELETE #destroy' do
	  it 'successfully removes a row' do
	    tax_old = Taxonomy.first
	    delete(:destroy, {id: 1})
	    expect(response).to have_http_status(200)
	    expect(tax_old).to_not eq(Taxonomy.first)
	    expect(Taxonomy.count).to eq(7)
	  end

	  it 'returns HTTP 404 on non-existent id' do
	    delete(:destroy, {id: 1488})
	    expect(response).to have_http_status(404)
	    expect(Taxonomy.count).to eq(8)
	  end
	end
end
