class Api::AdventuresController < ApplicationController
  before_action :set_adventure, only: [:show, :update, :destroy, :users]
  
  def index
    render json: Adventure.all
  end

  def show
    render json: @adventure
  end

  def users 
    render json: @adventure.users
  end

  def create
    @adventure = Adventure.new(adventure_params)
    if @adventure.save 
      render json: @adventure
    else
      render json: { errors: @adventure.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @adventure.update(adventure_params) 
      render json: @adventure
    else
      render json: { errors: @adventure.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @adventure.destroy
    render json: { message: 'Adventure deleted' }
  end

  private 
    def adventure_params
      params.require(:adventure).permit(:title, :desc)
    end

    def set_cadventure
      @adventure = Adventure.find(params[:id])
    end

end