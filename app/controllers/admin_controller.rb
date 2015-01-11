class AdminController < ApplicationController
	skip_before_action :verify_authenticity_token
	before_action :authenticate_user!

	def index
		@pages = Page.all
		@videos = Video.all.as_json(include: {page: {only: :title} })
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
end
