class BouquetsController < ApplicationController
  def index
    @bouquets = Bouquet.all
  end

  def new
    @bouquet = Bouquet.new
  end

  def create
    @bouquet = Bouquet.new(bouquet_params)
    if @bouquet.save
      redirect_to root_path, notice: "Bouquet successfully created."
    else
      render :new
    end
  end

  private

  def bouquet_params
    params.require(:bouquet).permit(:name, :description, photos: [])
  end
end
