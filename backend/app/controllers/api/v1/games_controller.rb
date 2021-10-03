class Api::V1::GamesController < ApplicationController

  def index
    games = Game.all
    render json: games
  end

  def create
    game = Game.create(game_params)
    if game
      render json: {
        status: :created,
        game: GameSerializer.new(game)
      }
    else
      render json: {
        status: :unprocessable_entity,
        error: 'failed to create user' }
    end
  end

  private
  def game_params
    params.require(:game).permit(:name, :number_of_players, :time, :description, :user_id)
  end

end
