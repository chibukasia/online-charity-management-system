class NgoCustomDonationSerializer < ActiveModel::Serializer
  attributes :id, :amount
  belongs_to :donation
  belongs_to :user 
end
