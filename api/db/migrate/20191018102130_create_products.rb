class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :content
      t.string :description
      t.string :name
      t.float :price
      t.integer :quantity
      t.string :sku
      t.references :category, foreign_key: true
      t.references :shop, foreign_key: true

      t.timestamps
    end
  end
end
