class Api::PresentationsController < ApplicationController
 skip_before_filter :verify_authenticity_token  

  def create
    Rails.logger.info params
    render json: Presentation.create(presentation_params)
  end

  def presentation_params
    params.require(:presentation).permit(:title, :speaker_id)
  end
end
