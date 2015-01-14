class Video < ActiveRecord::Base
	belongs_to :page
	
	has_attached_file :file
	validates_attachment_content_type :file, :content_type => 'video/webm'
end
