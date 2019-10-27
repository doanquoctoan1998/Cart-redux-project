class CreateWebsiteInformations < ActiveRecord::Migration[5.2]
  def change
    create_table :website_informations do |t|
      t.string :address
      t.string :phone
      t.string :email
      t.string :description

      t.timestamps
    end
  end
end
