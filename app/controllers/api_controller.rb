class ApiController < ApplicationController
	skip_before_action :verify_authenticity_token
	rescue_from ActiveRecord::RecordNotFound do
		render nothing: true, status: :not_found
	end
end