class CreateDonationRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :donation_requests do |t|
      t.string :title
      t.text :description
      t.decimal :target_amount
      t.decimal :amount_raised
      t.string :status
      t.boolean :open 
      t.references :category, null: false, foreign_key: true 
      t.references :ngo, null: false, foreign_key: true

      t.timestamps
    end
  end
end
