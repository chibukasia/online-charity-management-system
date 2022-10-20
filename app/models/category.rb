class Category < ApplicationRecord
    # Associations
    has_many :donation_requests
end
