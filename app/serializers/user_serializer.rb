class UserSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :username, :email, :phone_number, :role
  has_many :donations
  has_many :donation_requests
end
