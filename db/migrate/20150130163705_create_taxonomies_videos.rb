class CreateTaxonomiesVideos < ActiveRecord::Migration
  def self.up
    create_table :taxonomies_videos, :id => false do |t|
        t.references :taxonomy
        t.references :video
    end
    add_index :taxonomies_videos, [:taxonomy_id, :video_id]
    add_index :taxonomies_videos, :video_id
  end

  def self.down
    drop_table :taxonomies_videos
  end
end
