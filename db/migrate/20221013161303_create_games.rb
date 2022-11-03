class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :main_character
      t.integer :year_released
      t.string :console
      t.integer :series_id
    end
  end
end
