class Ngo < ApplicationRecord
    # Associations 
    belongs_to :user 
    has_many :donation_requests
end
