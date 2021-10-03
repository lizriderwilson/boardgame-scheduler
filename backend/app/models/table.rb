class Table < ApplicationRecord
  has_many :time_slots
  has_many :games, through: :time_slots
end
