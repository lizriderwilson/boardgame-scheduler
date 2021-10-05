class Api::V1::TimeSlotsController < ApplicationController

  def index
    time_slots = TimeSlot.all
    render json: time_slots
  end

  def create
    time_slot = TimeSlot.create(time_slot_params)
    if time_slot
      render json: TimeSlotSerializer.new(time_slot)
    else
      render json: {
        status: :unprocessable_entity,
        error: 'failed to create user' }
    end
  end

  private
  def time_slot_params
    params.require(:time_slot).permit(:start, :end, :allDay, :game_id, :table_id)
  end

end
