class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,
				#:registerable,
				#:recoverable, 
				 :rememberable
				# :trackable, 
				# :validatable
	include DeviseTokenAuth::Concerns::User

	before_validation :defaults

	def defaults
		self.tokens ||= {}
		self.provider ||= ''
		self.uid = SecureRandom.uuid
		# skip_confirmation!
	end
end
