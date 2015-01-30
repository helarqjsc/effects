class CreateTaxonomies < ActiveRecord::Migration
  def change
    create_table :taxonomies do |t|
      t.string :name
      t.string :taxonomy_type

      t.timestamps null: false
    end
  end
end
