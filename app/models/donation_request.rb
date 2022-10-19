class DonationRequest < ApplicationRecord
    # Associations 
    belongs_to :category
    belongs_to :ngo
end
