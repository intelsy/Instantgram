class Api::PostController < ApplicationController
    # protect_from_forgery with: :null_session

    def create
        # current_user = current_user.id
        new_post = Post.create(post_user_id: 1, message: 'hoge', image_path: params[:image])

        render json: new_post
    end
end
