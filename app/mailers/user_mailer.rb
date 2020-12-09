class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.invitation.subject
  #
  def invitation(user, owner, project)

    @greeting = "Bonjour"
    @user = user
    @owner = owner
    @project = project

    mail to: @user.email, subject: "Invitationà écrire"
  end
end
