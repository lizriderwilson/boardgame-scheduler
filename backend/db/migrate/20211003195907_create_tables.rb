class CreateTables < ActiveRecord::Migration[6.1]
  def change
    create_table :tables do |t|
      t.string :location

      t.timestamps
    end
  end
end
