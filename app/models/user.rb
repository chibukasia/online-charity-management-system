class User < ApplicationRecord
  # Associations
  has_one :ngo 
  has_many :donations 
  has_many :donation_requests, through: :donations
end
