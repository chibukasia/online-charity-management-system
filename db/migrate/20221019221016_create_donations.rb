class CreateDonations < ActiveRecord::Migration[7.0]
  def change
    create_table :donations do |t|
      t.decimal :amount
      t.references :donation_request, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
