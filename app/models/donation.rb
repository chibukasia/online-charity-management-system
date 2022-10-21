class Donation < ApplicationRecord
    # Assosciations
    belongs_to :user
    belongs_to :donation_request

    # Validate donations
    validate :validate_presence_and_comparison
    #validates :amount, comparison: {greater_than: 1}, presence: true
    def validate_presence_and_comparison
        if amount && amount > 0
            errors.add(:amount, "amount must be present and greater than 0")
        end
    end

end
