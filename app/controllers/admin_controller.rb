class AdminController < ApplicationController
	skip_before_action :verify_authenticity_token

	def index
		@pages = Page.all
		@videos = Video.all
	end

	def save
		# Rails.logger.warn params['_json']
		if params[:obj] == 'pages'
			params['_json'].each do |page|
				Page.update(page[:id], title: page[:title], slug: page[:slug])
			end
		end
		render json: '{"lel": 123}'
	end
end
