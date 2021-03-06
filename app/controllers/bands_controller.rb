class BandsController < ApplicationController
  before_action :set_band, only: [:show, :edit, :update, :destroy]

  after_action :send_invitation_email, only: [:create]

  def send_invitation_email
    @owner = current_user
    @project = Project.find(params[:project_id])
    # @users.each do |user|
    #   UserMailer.invitation(user, @owner, @project).deliver_later
    # end
  end

  def index
    @bands = Band.all
  end

  def show
  end

  def new
    @band = Band.new
    authorize @band
    @project = Project.find(params[:project_id])
    @emails = User.all.map { |user| user.email }
  end

  def create
    ok = false
    @project = Project.find(params[:project_id])
    @users = User.where(email: params[:band][:user])
    @bande_name = params[:band][:name]
    @write_acces = params[:band][:write_acces]

    @users.each do |user|

      band = Band.new(name: @bande_name, project: @project, user: user, write_acces: @write_acces)
      
      authorize band
      band.save
      ok = true
    end

    if ok


      redirect_to project_path(@project), notice: 'Votre groupe a bien été créé.'

    else
      render :new
    end
  end

  def search
    @bands = Band.all
    @band_users = []
    @bands = Band.where(project_id: Project.find(params[:project_id]))
    @bands.each do |band|
      @band = band
      @user = User.find(band.user_id)
      @band_users << [@user, @band] #User.find(band.user_id)
    end
    @name = @bands[0].name
    authorize @bands
  end

  def update
  end

  def destroy
  end

  private

  def set_band
    #raise
    @band = Band.find(params[:id])
    authorize @band
  end

  def band_params
    params.require(:band).permit(:name, :write_acces)
  end
end
