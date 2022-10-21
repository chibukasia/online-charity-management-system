class ApprovedDonationRequestsSerializer < ActiveModel::Serializer
  attributes :id, :title, :summary, :target_amount
  belongs_to :category
  belongs_to :ngo
  #summary description
  def summary
    "#{self.object.description[0..60]}..."
  end
end
