class Post < ApplicationRecord
    mount_uploader :image_path, PostImageUploader
end
