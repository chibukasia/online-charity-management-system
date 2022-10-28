class ChangeColumnDataType < ActiveRecord::Migration[7.0]
  def change
    change_column :donation_requests, :amount_raised, :bigint
  end
end
