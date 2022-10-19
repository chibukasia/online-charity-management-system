class DonationRequestSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :target_amount, :amount_raised, :status, :open
end
