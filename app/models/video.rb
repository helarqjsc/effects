class Video < ActiveRecord::Base
	has_and_belongs_to_many :taxonomies
	
	has_attached_file :file
	validates_attachment :file, {
		content_type: { content_type: 'video/webm' },
		size: { in: 1..10.megabytes }
	}
	validates_presence_of [:title, :url]

	def as_json
		json = super(only: [:id, :title, :url, :created_at])
		json[:file_url] = Video.find(json['id'].to_i).file.url
		json
	end
end
