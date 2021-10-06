class TableSerializer < ActiveModel::Serializer
  attributes :id, :location
  has_many :time_slots
end
