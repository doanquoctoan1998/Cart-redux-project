class ChangeProduct < ActiveRecord::Migration[5.2]
  def change
  	change_column :products, :price, :float
  	add_column :products, :quantity, :integer
  end
end
