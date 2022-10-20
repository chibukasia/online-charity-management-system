class User < ApplicationRecord
  # Associations
  has_one :ngo 
  has_many :donations 
  has_many :donation_requests, through: :donations 
  has_secure_password

  # User registration validations 
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :username, presence: true, uniqueness: true, length: {minimum:4, maximum: 12 }
  validates :email, presence: true, uniqueness: true
  validates :phone_number, presence: true, uniqueness: true, length: {minimum: 10, maximum: 13}
end
