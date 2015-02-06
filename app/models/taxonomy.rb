class Taxonomy < ActiveRecord::Base
	has_and_belongs_to_many :videos
	before_save :defaults
	validates_presence_of :name, :taxonomy_type

	def self.tags
		where(taxonomy_type: :tag)
	end

	def self.categories
		where(taxonomy_type: :category)
	end

	def as_json
		json = super(only: [:id, :name, :slug, :taxonomy_type])
		json
	end

	def defaults
		self.slug ||= self.name.parameterize
	end
end
