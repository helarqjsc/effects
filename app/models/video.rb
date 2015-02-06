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
		video = Video.find(json['id'].to_i)
		json[:file_url] = video.file.url
		json[:categories] = Array.wrap(video.taxonomies.categories.as_json)
		json[:tags] = Array.wrap(video.taxonomies.tags.as_json)
		json
	end
end
