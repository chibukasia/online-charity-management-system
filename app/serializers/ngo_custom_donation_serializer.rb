class NgoCustomDonationSerializer < ActiveModel::Serializer
  attributes :id, :amount
  belongs_to :donation_request
  belongs_to :user
end
