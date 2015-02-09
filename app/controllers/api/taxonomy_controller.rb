class Api::TaxonomyController < ApiController
	before_action :find_taxonomy, only: [:show, :update, :destroy]

	def index
		@taxs = Taxonomy.all
		render json: @taxs.as_json
	end

	def create
		@tax = Taxonomy.new(params_create)
		if @tax.save
			render nothing: true, status: :ok
		else
			render nothing: true, status: :bad_request
		end
	end

	def show
		render json: @tax.as_json
	end

	def update
		@tax.update_attributes(params_update)
		if @tax.save
			render nothing: true, status: :ok
		else
			render nothing: true, status: :bad_request
		end
	end

	def destroy
		@tax.destroy
		render nothing: true, status: :ok
	end

	private
		def find_taxonomy
			@tax = Taxonomy.find(params[:id])
		end

		def params_create
			 params.permit(:taxonomy_type, :name, :slug)
		end

		def params_update
			params.permit(:id, :name, :slug)
		end
end
