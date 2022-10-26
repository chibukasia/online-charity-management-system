class DonationRequestSerializer < ActiveModel::Serializer
  attributes :title, :target_amount, :amount_raised, :open, :image_url, :bank_statement_url
  belongs_to :ngo

  #description summary
  def summary
    "#{self.object.description[0..60]}..."
  end 

end
