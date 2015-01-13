class AdminController < ApplicationController
	skip_before_action :verify_authenticity_token
	before_action :authenticate_user!

	def index
		@pages = Page.all
		@videos = Video.all
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


end
