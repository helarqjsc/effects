class Category < ActiveRecord::Base
	self.table_name = 'categories'
	has_and_belongs_to_many :videos

	def self.all_json
		all.as_json.unshift({id: 'all', title: 'Все', slug: 'all'})
	end
end
