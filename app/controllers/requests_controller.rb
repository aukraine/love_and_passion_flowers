class RequestsController < ApplicationController
  def create
    email = params[:email]
    message = params[:message]

    RequestMailer.send_request(email, message).deliver_now

    redirect_to root_path, notice: "Your request has been sent successfully."
  end
end
