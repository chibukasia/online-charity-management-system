class Donation < ApplicationRecord
    # Assosciations
    belongs_to :user
    belongs_to :donation_request

    # Validate donations
    validates :amount, comparison: {greater_than: 1}, presence: true

end
