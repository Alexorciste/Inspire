# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/user_mailer/invitation
  def invitation
    user = User.find_by(nickname: "Julien")
    UserMailer.invitation(user)#.deliver_now
  end

end
