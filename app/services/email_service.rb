require 'sendgrid-ruby'
include SendGrid

class EmailService 

    def self.call(from:, to:, subject:, content:)
        self.new.send_mail(from: from, to: to, subject: subject, content: content)
    end

    def initialize()
        @sendgrid = SendGrid::API.new(api_key: Rails.application.credentials.sendgrid)
    end 

    def send_mail(from:, to:, subject:, content:)
        from = Email.new(email: from)
        to = Email.new(email: to)
        content = Content.new(type: 'text/plain', value: content) 
        # mail = Mail.new(from, subject, to, content)
        mail = SendGrid::Mail.new(from, subject, to, content)
        response = @sendgrid.client.mail._('send').post(request_body: mail.to_json)
        puts response.status_code
        puts response.body
        puts response.headers
    end
end