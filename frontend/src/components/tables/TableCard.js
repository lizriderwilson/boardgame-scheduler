import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

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

console.log(parse("2021-10-08", "yyyy-MM-dd", new Date()));

const TableCard = (props) => (
  <div className="bg-amber-100 p-6 rounded-lg shadow-lg text-darkbrown">
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
      Table {props.table.location}
    </h4>
    <div className="mt-4">
      <Calendar
        date={new Date(2021, 9, 8)}
        localizer={localizer}
        events={props.table.time_slots}
        startAccessor="start"
        endAccessor="end"
        timeslots={1}
        step={60}
        view="day"
        toolbar={false}
        header={false}
        min={new Date(0, 0, 0, 10, 0, 0)}
        max={new Date(0, 0, 0, 18, 0, 0)}
        style={{ minHeight: 200 }}
      />
    </div>
  </div>
);

export default TableCard;
