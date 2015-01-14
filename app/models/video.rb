class Video < ActiveRecord::Base
	belongs_to :page
	
	has_attached_file :file
	validates_attachment_content_type :file, :content_type => 'video/webm'

	def self.all_with_files
		all.as_json.map do |video|
			video[:file_url] = Video.find(video['id']).file.url
			Rails.logger.warn video
			video
		end
	end
end
