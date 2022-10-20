class Ngo < ApplicationRecord
    # Associations 
    belongs_to :user 
    has_many :donation_requests

    # NGO registration validations
    validates :organization_name, presence: true, uniqueness: true
    validates :address, presence: true
    validates :organization_phone_number, presence: true, uniqueness: true, length: {minimum: 10, maximum: 13}
    validates :organization_email, presence: true, uniqueness: true
    validates :registration_number, presence: true, uniqueness: true, length: {minimum: 6, maximum: 10}
    validates :description, presence: true, length: {minimum: 100}
end
