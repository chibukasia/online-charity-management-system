class CustomDonationRequestSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :target_amount, :amount_raised, :status, :open, :summary

  # description summary
  def summary
    "#{self.object.description[0..60]}..."
  end 
end
