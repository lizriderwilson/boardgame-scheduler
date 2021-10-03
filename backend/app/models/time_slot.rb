class TimeSlot < ApplicationRecord
  belongs_to :game
  belongs_to :table
end
