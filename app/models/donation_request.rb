class DonationRequest < ApplicationRecord
    # Associations 
    belongs_to :category
    belongs_to :ngo
    has_many :donations 
    has_many :users, through: :donations 
end
