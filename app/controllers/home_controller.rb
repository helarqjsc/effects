class HomeController < ApplicationController
	def index
		@pages = Page.all
		@videos = Video.all
	end
end
