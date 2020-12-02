class BandsController < ApplicationController
  before_action :set_band, only: [:show, :edit, :update, :destroy]

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

    @users.each do |user|
      band = Band.new(name: @bande_name, project: @project, user: user)
      authorize band
      band.save
      ok = true
    end

    if ok
      redirect_to project_path(@project), notice: 'Band was successfully created.'
    else
      render :new
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def set_band
    raise
    @band = Band.find(params[:id])
    authorize @band
  end

  def band_params
    params.require(:band).permit(:name)
  end
end