class Api::PostsController < ApplicationController
 skip_before_filter :verify_authenticity_token  
  def index
    render json: Post.all
  end

  def show
    render json: Post.find(params[:id])
  end

  def create
    Rails.logger.info params
    render json: Post.create(title: params[:post][:title], body: params[:post][:body])
  end
end
