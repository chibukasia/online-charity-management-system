class ChangeColumnTargetAmountDataType < ActiveRecord::Migration[7.0]
  def change
    change_column :donation_requests, :target_amount, :bigint
  end
end
