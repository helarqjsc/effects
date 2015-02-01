class Taxonomy < ActiveRecord::Base
	has_and_belongs_to_many :videos
	after_initialize :defaults

	def defaults
		self.slug ||= self.name.parameterize
	end
end
