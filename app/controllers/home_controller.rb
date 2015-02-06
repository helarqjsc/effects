class HomeController < ApplicationController
	protect_from_forgery with: :null_session

	def index
		@taxonomies = Taxonomy.all.as_json
		@videos = Video.all.as_json
	end

end
