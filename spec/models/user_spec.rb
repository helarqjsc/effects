require 'spec_helper'

describe User do

  it "gets a uid assigned" do
  	@user = FactoryGirl.build(:admin)
    @user.save!
    expect(@user.uid).not_to be_blank
  end

end