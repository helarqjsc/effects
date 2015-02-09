require 'spec_helper'

describe User do

  it "gets a uid assigned" do
  	@user = FactoryGirl.build(:admin)
    @user.save!
    puts @user.inspect
    expect(@user.uid).not_to be_blank
  end

  # it "doesn't send a confirmation email" do
  #   expect { @user.save! }.not_to change { ActionMailer::Base.deliveries.count }
  # end
end