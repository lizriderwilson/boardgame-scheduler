import React, { Component } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

import Modal from "react-modal";
import NewTimeSlotForm from "./NewTimeSlotForm";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

class TableCard extends Component {
  state = {
    modalOpen: false,
    start: "",
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  setStartTime = (event) => {
    this.setState({
      start: event.start,
    });
    this.toggleModal();
  };

  render() {
    return (
      <div className="bg-amber-100 p-6 rounded-lg shadow-lg text-darkbrown">
        <div className="flex justify-between">
          <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
            Table {this.props.table.location}
          </h4>
        </div>
        <div className="mt-4">
          <Calendar
            date={new Date(2021, 9, 8)}
            onNavigate="defaultDate"
            localizer={localizer}
            events={this.props.table.time_slots}
            onSelectEvent={(slot) => false}
            onSelectSlot={this.setStartTime}
            selectable={true}
            startAccessor="start"
            endAccessor="end"
            timeslots={1}
            step={60}
            view="day"
            onView="defaultView"
            toolbar={false}
            header={false}
            min={new Date(0, 0, 0, 10, 0, 0)}
            max={new Date(0, 0, 0, 18, 0, 0)}
            style={{ minHeight: 200 }}
          />
          <Modal
            key={this.props.table.key}
            id={"modal" + this.props.table.key}
            isOpen={this.state.modalOpen}
            overlayClassName="bg-transparent"
          >
            <button
              className="bg-amber-500 p-2 rounded-md text-white"
              onClick={this.toggleModal}
            >
              CLOSE
            </button>
            <NewTimeSlotForm
              toggleModal={this.toggleModal}
              tableId={this.props.table.id}
              start={String(this.state.start)}
            />
          </Modal>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     timeSlots: state.timeSlots,
//   };
// };

// export default connect(mapStateToProps)(TableCard);

export default TableCard;
