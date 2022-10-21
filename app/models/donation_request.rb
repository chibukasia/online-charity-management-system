class DonationRequest < ApplicationRecord
    # Associations
    belongs_to :category
    belongs_to :ngo
    has_many :donations
    has_many :users, through: :donations

    # Validates the request form
    validates :title, presence: true, length: {minimum: 12}
    validates :description, presence: true, length: {minimum: 100}
    validates :target_amount, presence: { message: "must be given please" }, comparison: {greater_than: 500}

end
