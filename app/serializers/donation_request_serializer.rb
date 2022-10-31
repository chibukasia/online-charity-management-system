class DonationRequestSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :target_amount, :amount_raised, :status, :open, :summary, :created_at, :image_url, :bank_statement_url
  belongs_to :ngo
  belongs_to :category
  has_many :donations

  #description summary
  def summary
    "#{self.object.description[0..60]}..."
  end 

end
