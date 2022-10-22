class DonationSerializer < ActiveModel::Serializer
  attributes :amount
  #belongs_to :user
  #belongs_to :donation_request
end
