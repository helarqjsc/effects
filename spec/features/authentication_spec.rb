require 'rails_helper'

feature 'Authentication', js: true do
	before :all do
		@user = FactoryGirl.create(:admin)
	end

	feature 'open login page' do
	  scenario 'from home page' do
	    visit '/'
	    # puts page.driver.html

	    find(".login-block a", text: "Войти").click
	    expect(page).to have_content('Log in')
	  end
	end

  feature 'login' do
    scenario 'with valid inputs' do
      visit '/login'
      # find(".login-block a", text: "Войти").click
      # expect(page).to have_content('sdfsdfsdfdsf')

      fill_in "Username", with: @user.email
      fill_in "Password", with: @user.password
      find("input[type=submit]").click

      # puts page.methods.sort
      # puts page.response_headers

      expect(response).to have_http_status(200)
      expect(page).to have_content('sdfsdfds')
    end
  end
end