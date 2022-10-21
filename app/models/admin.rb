class Admin < ApplicationRecord
  # Admin validations 
  has_secure_password 
  validates :username, presence: true, uniqueness: true 

end
