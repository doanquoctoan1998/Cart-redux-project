class RemoveDatetimeToProduct < ActiveRecord::Migration[5.2]
  def change
  	remove_column :products, :updated_at, :datetime
  	remove_column :products, :created_at, :datetime
  end
end
