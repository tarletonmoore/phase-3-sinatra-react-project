class CreateSeries < ActiveRecord::Migration[6.1]
  def change
    create_table :series do |t|
t.string :title
    end
  end
end
