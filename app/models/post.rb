class Post < ApplicationRecord
    mount_uploader :image_path, ImageUploader
    has_many :likes, foreign_key: 'post_id', class_name: 'Post', dependent: :destroy
end
