class HomeController < ApplicationController
	def index
		@pages = Page.all
		@videos = Video.all_with_files
	end
end
