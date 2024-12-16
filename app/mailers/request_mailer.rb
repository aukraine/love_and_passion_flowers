class RequestMailer < ApplicationMailer
  default to: ENV["GMAIL_ACCOUNT"], subject: "New Request from 'Love & Passion. Flowers' Website"

  def send_request(sender_email, body_message)
    mail(body: build_body_message(sender_email, body_message))
  end

  private

  def build_body_message(sender_email, body_message)
    <<~BODY
      FROM: Love & Passion. Flowers Customer <#{sender_email}>

      ----------------------------------------------

      #{body_message}
    BODY
  end
end
