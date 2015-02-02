class HomeController < ApplicationController
	protect_from_forgery with: :null_session

	def index
		@pages = Page.all_json
		@videos = Video.all_json
	end

	def submit_url
		ContributedUrl.create(url: params[:url], ip_addr: request.remote_ip)
		render json: {status: :ok}
	end
end
