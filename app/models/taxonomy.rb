class Taxonomy < ActiveRecord::Base
	has_and_belongs_to_many :videos
	before_save :defaults
	validates_presence_of :name, :taxonomy_type

	def defaults
		self.slug ||= self.name.parameterize
	end
end
