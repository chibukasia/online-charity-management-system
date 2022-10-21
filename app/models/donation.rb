class Donation < ApplicationRecord
    # Assosciations
    belongs_to :user 
    belongs_to :donation_request

    # Validate donations 
    validates :amount, presence: true, comparison: {greater_than: 1}

end
