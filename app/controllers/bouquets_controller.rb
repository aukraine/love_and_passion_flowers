class BouquetsController < ApplicationController
  def index
    @bouquets = Bouquet.all
  end

  def show
    @bouquet = Bouquet.find(params[:id])
  end

  def new
    @bouquet = Bouquet.new
  end

  def create
    @bouquet = Bouquet.new(bouquet_params)
    if @bouquet.save
      redirect_to bouquet_path(@bouquet), notice: "Bouquet successfully created."
    else
      render :new
    end
  end

  private

  def bouquet_params
    params.require(:bouquet).permit(:name, :description, photos: [])
  end
end
