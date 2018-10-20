class Post < ApplicationRecord
    mount_uploader :image_path, ImageUploader
end
