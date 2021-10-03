class Game < ApplicationRecord
  belongs_to :user
  has_many :time_slots
  has_many :tables, through: :time_slots
end
