class AddTrendingAndRatingToProducts < ActiveRecord::Migration[5.2]
  def change
  	add_column :products, :trending, :float
  	add_column :products, :rating, :float
  end
end
