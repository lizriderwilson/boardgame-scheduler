class Api::V1::TimeSlotsController < ApplicationController

  def index
    time_slots = TimeSlot.all
    render json: time_slots
  end

end
