class TimeSlotSerializer < ActiveModel::Serializer
  attributes :id, :start, :end, :allDay, :title
  belongs_to :game
  belongs_to :table

  def title
    title = object.game.name
    return title
  end
end
