class TextsController < ApplicationController
  before_action :set_text, only: [:show, :edit, :update, :destroy ]

  def index
    @texts = policy_scope(Text)
  end

  def show
  end

  def new
    @text = Text.new
    @project = Project.find(params[:project_id])
    authorize @text
  end

  def create
    @text = Text.new(text_params)
    @text.project = Project.find(params[:project_id])
    authorize @text

    if @text.save
      redirect_to project_path(@text.project), notice: 'Le texte a été créé.'
    else
      render :new
    end
  end

  def edit
    @project = @text.project
  end

  def update
    if @text.update(text_params)
      redirect_to project_path(@text.project), notice: 'Le texte a été modifié.'
    else
      render :edit
    end
  end

  def destroy
    @text.destroy
    redirect_to project_path(@text.project_id), notice: 'Le texte a été supprimé.'
  end

  def fetchword
  end

  private

  def set_text

    @text = Text.find(params[:id])
    authorize @text

  end

  def text_params
    params.require(:text).permit(:title, :content) # <== le (..., :content) de action text.
  end
end
