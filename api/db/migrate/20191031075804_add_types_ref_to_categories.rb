class AddTypesRefToCategories < ActiveRecord::Migration[5.2]
  def change
    add_reference :categories, :types, foreign_key: true
  end
end
