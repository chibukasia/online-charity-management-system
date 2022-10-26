class CustomDonationRequestSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :target_amount, :amount_raised, :status, :open, :summary, :image_url, :bank_statement_url
  belongs_to :ngo

  # description summary
  def summary
    "#{self.object.description[0..60]}..."
  end 
end
