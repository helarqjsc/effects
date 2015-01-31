class CreateTaxonomies < ActiveRecord::Migration
  def change
    create_table :taxonomies do |t|
      t.string :name
      t.string :slug
      t.string :taxonomy_type

      t.timestamps null: false
    end
  end
end
