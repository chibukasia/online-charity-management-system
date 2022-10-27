class NgoCustomDonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :created_at
  belongs_to :donation_request
  belongs_to :user
end
