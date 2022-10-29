class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :created_at
  belongs_to :user
  belongs_to :donation_request
  belongs_to :ngo
  # belongs_to :category
end
