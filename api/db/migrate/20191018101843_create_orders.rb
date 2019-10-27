class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.datetime :date_paid
      t.string :status
      t.float :total
      t.integer :buyer_id
      t.references :payment, foreign_key: true
      t.references :shop, foreign_key: true

      t.timestamps
    end
  end
end
