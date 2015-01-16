class Video < ActiveRecord::Base
	belongs_to :page
	
	has_attached_file :file
	validates_attachment :file, {
		content_type: { content_type: 'video/webm' },
		size: { in: 1..10.megabytes }
	}

	def self.all_json
		all.as_json.map do |video|
			video[:file_url] = Video.find(video['id']).file.url
			video
		end
	end
end
