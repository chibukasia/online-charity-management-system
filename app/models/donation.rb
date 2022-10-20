class Donation < ApplicationRecord
    # Assosciations
    belongs_to :user 
    belongs_to :donation_request
end
