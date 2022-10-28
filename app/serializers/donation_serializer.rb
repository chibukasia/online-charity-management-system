class DonationSerializer < ActiveModel::Serializer
  attributes :amount, :created_at
  belongs_to :donation_request
  belongs_to :user
end
