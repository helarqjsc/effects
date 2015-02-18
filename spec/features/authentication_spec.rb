require 'rails_helper'

feature 'Authentication', js: true do
	before :all do
		@user = FactoryGirl.create(:admin)
	end

	feature 'open login page' do
	  scenario 'from home page' do
	    visit '/'
	    find(".login-block a", text: "Войти").click
	    expect(page).to have_content('Log in')
	  end
	end

  feature 'login' do
    scenario 'with valid inputs' do
      visit '/login'
      fill_in "Username", with: @user.email
      fill_in "Password", with: @user.password
      find("input[type=submit]").click
      expect(page).to have_content('Back to site')
    end

    scenario 'with invalid inputs' do
      visit '/login'
      fill_in "Username", with: 'sladkaya'
      fill_in "Password", with: 'vikusya'
      find("input[type=submit]").click
      expect(page).to have_content('Log in')
    end
  end
end