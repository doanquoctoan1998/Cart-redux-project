class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
  	rename_column :products, :categories_id, :category_id
  	rename_column :categories, :types_id, :type_id
  end
end
