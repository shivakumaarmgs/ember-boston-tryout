class Api::CommentsController < ApplicationController
  skip_before_filter :verify_authenticity_token  

  def create
    render json: Comment.create(comment_params)
  end

  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end
end
