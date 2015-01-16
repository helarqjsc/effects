class AdminController < ApplicationController
	skip_before_action :verify_authenticity_token
	before_action :authenticate_user!

	def index
		@pages = Page.all_json
		@videos = Video.all_json
		#Rails.logger.warn @videos.inspect
	end

	def save_pages
		# Rails.logger.warn params['_json']
		params[:update].each do |page|
			if page[:id].nil?
				Page.create(title: page[:title], slug: page[:slug])
			else
				Page.update(page[:id], title: page[:title], slug: page[:slug])
			end
		end

		if not params[:delete].nil?
			params[:delete].each do |page|
				Page.delete(page[:id])
			end
		end

		@pages = Page.all
		render json: @pages.to_json
	end

	def save_videos
		params[:update].each do |video|
			if video[:id].nil?
				Video.create(title: video[:title], url: video[:url], page_id: video[:page_id])
			else
				Video.update(video[:id], title: video[:title], url: video[:url], page_id: video[:page_id])
			end
		end

		@videos = Video.all
		render json: @videos.to_json
	end

	def upload_video
		if upload_params[:id].nil?
			video = Video.new(upload_params)
			if video.save
				@videos = Video.all
				render json: @videos.to_json
			else
				render json: video.errors
			end
		end
	end

	private
		def upload_params
			params.require(:video).permit(:id, :file)
		end
end
