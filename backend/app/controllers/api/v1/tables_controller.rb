class Api::V1::TablesController < ApplicationController

  def index
    tables = Table.all
    render json: tables
  end

  def create
    table = Table.create(table_params)
    if table
      render json: {
        status: :created,
        table: TableSerializer.new(table)
      }
    else
      render json: {
        status: :unprocessable_entity,
        error: 'failed to create table' }
    end
  end

  private
  def game_params
    params.require(:table).permit(:location)
  end

end
