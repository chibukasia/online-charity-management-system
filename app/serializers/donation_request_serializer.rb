class DonationRequestSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :target_amount, :amount_raised, :status, :open, :summary
  belongs_to :ngo

  #description summary
  def summary
    "#{self.object.description[0..60]}..."
  end
end
