class Page < ActiveRecord::Base
	has_many :videos

	def self.all_json
		all.as_json.unshift({id: 'all', title: 'Все', slug: 'all'})
	end
end
