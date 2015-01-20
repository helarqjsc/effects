class CreateContributedUrls < ActiveRecord::Migration
  def change
    create_table :contributed_urls do |t|
      t.string :url
      t.string :ip_addr

      t.timestamps null: false
    end
  end
end
