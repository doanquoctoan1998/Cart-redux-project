class CreateShops < ActiveRecord::Migration[5.2]
  def change
    create_table :shops do |t|
      t.string :address
      t.string :email
      t.string :name
      t.string :paypal_account
      t.string :phone
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
