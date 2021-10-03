class TimeSlotSerializer < ActiveModel::Serializer
  attributes :id, :start, :end, :allDay
  belongs_to :game, :table
end
