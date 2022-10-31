class DonationRequest < ApplicationRecord
    # Associations
    belongs_to :category
    belongs_to :ngo
    has_many :donations
    has_many :users, through: :donations
    has_one_attached :image
    has_one_attached :bank_statement

    # Validates the request form
    validates :title, presence: true, length: {minimum: 12}
    validates :description, presence: true, length: {minimum: 100}
    validates :target_amount, presence: true, comparison: {greater_than: 500}
    validates :image, attached: true, blob: { content_type: :image }
    validates :bank_statement, attached: true, blob: {content_type: ["application/pdf"]}

    # Generate a url for the image uploaded
    def image_url
        Rails.application.routes.url_helpers.url_for(image) if image.attached?
    end 
    
    # Genarate a url for the bank statement uploaded
    def bank_statement_url
        Rails.application.routes.url_helpers.url_for(bank_statement) if bank_statement.attached?
    end
end
