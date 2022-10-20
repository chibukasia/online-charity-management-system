class ApprovedDonationRequestsSerializer < ActiveModel::Serializer
  attributes :id, :title, :summary, :target_amount, :category_name
  belongs_to :ngo
  #summary description
  def summary
    "#{self.object.description[0..60]}..."
  end
end
