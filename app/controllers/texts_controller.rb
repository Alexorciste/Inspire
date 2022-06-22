class TextsController < ApplicationController
  before_action :set_text, only: [:show, :edit, :update, :destroy ]

  def index
    @texts = policy_scope(Text)
  end

  def show
  end

  def new
    @text = Text.new
    authorize @text
  end

  def create
    @text = Text.new(text_params)
    @text.user = current_user
    authorize @text

    if @text.save
      redirect_to text_path(@text), notice: 'Le texte a été créé.'
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @text.update(text_params)
      redirect_to text_path(@text), notice: 'Le texte a été modifié.'
    else
      render :edit
    end
  end

  def destroy
    @text.destroy
    redirect_to texts_path, notice: 'Le texte a été supprimé.'
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
