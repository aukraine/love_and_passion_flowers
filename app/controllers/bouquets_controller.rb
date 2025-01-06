class BouquetsController < ApplicationController
  before_action :set_bouquet, only: [:show, :edit, :update]

  def index
    @bouquets = Bouquet.all
  end

  def show
  end

  def new
    @bouquet = Bouquet.new
  end

  def create
    @bouquet = Bouquet.new(bouquet_params)
    if @bouquet.save
      redirect_to bouquet_path(@bouquet), notice: "Bouquet was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @bouquet.update(bouquet_params)
      redirect_to bouquet_path(@bouquet), notice: "Bouquet was successfully updated."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  private

  def bouquet_params
    params.require(:bouquet).permit(*bouquet_permit_attributes)
  end

  def bouquet_permit_attributes
    attributes = [:name, :description]
    attributes << { photos: [] } if params[:bouquet][:photos].any?(&:present?)

    attributes
  end

  def set_bouquet
    @bouquet = Bouquet.find(params[:id])
  end
end
