require 'faker'

FactoryGirl.define do
  factory :video do
    title { Faker::Lorem.sentence }
    url { Faker::Internet.url }
    file { random_video_file }
  end

end