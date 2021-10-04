class TimeSlotSerializer < ActiveModel::Serializer
  attributes :id, :start, :end, :allDay
  belongs_to :game
  belongs_to :table
end
