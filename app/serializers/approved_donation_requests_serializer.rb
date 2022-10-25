class ApprovedDonationRequestsSerializer < ActiveModel::Serializer
  attributes :id, :title, :summary, :target_amount, :amount_raised, :image_url, :bank_statement_url
  belongs_to :category
  belongs_to :ngo
  #summary description
  def summary
    "#{self.object.description[0..60]}..."
  end
end
