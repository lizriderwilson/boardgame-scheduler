class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.string :number_of_players
      t.string :time
      t.text :description
      t.integer :user_id

      t.timestamps
    end
  end
end
