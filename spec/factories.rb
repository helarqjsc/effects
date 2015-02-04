require 'faker'

FactoryGirl.define do
  factory :video do
    title { Faker::Lorem.sentence }
    url { Faker::Internet.url }
    file { random_video_file }
  end

  trait :taxonomy do
    name { Faker::Lorem.sentence(1) }
  end

  factory :tag, class: Taxonomy do
    taxonomy
    taxonomy_type { 'tag' }
  end

  factory :category, class: Taxonomy do
    taxonomy
    taxonomy_type { 'category' }
  end
end