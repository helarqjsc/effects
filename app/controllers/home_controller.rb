class HomeController < ApplicationController
	def index
		@pages = Page.all_json
		@videos = Video.all_json
	end
end
