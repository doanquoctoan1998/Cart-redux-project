class CreateAnnouncements < ActiveRecord::Migration[5.2]
  def change
    create_table :announcements do |t|
      t.string :content
      t.boolean :is_read
      t.references :announcement_type, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
