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

const TableCard = (props) => (
  <div className="bg-amber-100 p-6 rounded-lg shadow-lg text-darkbrown">
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
      Table {props.table.location}
    </h4>
    <div className="mt-4">
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  </div>
);

export default TableCard;
