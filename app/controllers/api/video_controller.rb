class Api::VideoController < ApplicationController
	before_action :find_video, only: [:show, :update, :destroy]

	rescue_from ActiveRecord::RecordNotFound do
		render nothing: true, status: :not_found
	end

	def index
		@videos = Video.all
		render json: @videos.as_json
	end

	def create
		@video = Video.new(params_create)
		if @video.save
			render nothing: true, status: :ok
		else
			render nothing: true, status: :bad_request
		end
	end

	# def show
	# 	render json: @video.as_json
	# end

	# def update
	# 	@video.update_attributes(params_update)
	# 	if @video.save
	# 		render nothing: true, status: :ok
	# 	else
	# 		render nothing: true, status: :bad_request
	# 	end
	# end

	# def destroy
	# 	@video.destroy
	# end

	private
		def find_video
			@video = Video.find(params[:id])
		end

		def params_create
			 params.permit(:file, :title, :url)
		end

		def params_update
			params.permit(:title, :url)
		end
end