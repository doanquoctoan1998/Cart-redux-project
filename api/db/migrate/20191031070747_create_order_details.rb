class CreateOrderDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :order_details do |t|
      t.float :price
      t.integer :quantity
    end
  end
end
