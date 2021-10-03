class CreateTimeSlots < ActiveRecord::Migration[6.1]
  def change
    create_table :time_slots do |t|
      t.integer :game_id
      t.integer :table_id
      t.string :start
      t.string :end
      t.boolean :allDay

      t.timestamps
    end
  end
end
