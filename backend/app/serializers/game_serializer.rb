class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :number_of_players, :time, :description
  belongs_to :user
end
