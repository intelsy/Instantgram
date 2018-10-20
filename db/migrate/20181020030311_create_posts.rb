class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.integer :post_user_id
      t.string :message
      t.string :image_path

      t.timestamps
    end
  end
end
