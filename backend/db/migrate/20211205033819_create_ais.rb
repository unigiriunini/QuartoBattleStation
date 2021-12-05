class CreateAis < ActiveRecord::Migration[6.1]
  def change
    create_table :ais do |t|
      t.string :name, null: false
      t.integer :elo

      t.timestamps
    end
    add_index :ais, :name, unique: true
  end
end
