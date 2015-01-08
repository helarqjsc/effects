class CreateOptions < ActiveRecord::Migration
  def change
    create_table :options do |t|
      t.string :name
      t.string :value

      t.timestamps null: false
    end
  end
end
