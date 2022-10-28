class NgoSerializer < ActiveModel::Serializer
  attributes :id, :organization_name, :address, :organization_phone_number, :organization_email, :registration_number, :description
  belongs_to :user
end
