class CreateNgos < ActiveRecord::Migration[7.0]
  def change
    create_table :ngos do |t|
      t.string :organization_name
      t.string :address
      t.string :organization_phone_number
      t.string :organization_email
      t.string :registration_number
      t.text :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
