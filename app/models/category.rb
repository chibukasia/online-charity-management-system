class Category < ApplicationRecord
    # Associations
    has_many :donation_requests

    # Category validations 
    validates :category_name, presence: true, uniqueness: true
end
