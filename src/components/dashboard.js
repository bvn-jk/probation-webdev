import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import React, { useCallback, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const DnDCalendar = withDragAndDrop(Calendar);

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    id: 1,
    title: "Kelompok 1",
    start: new Date(2024, 2, 4, 15, 0, 0),
    end: new Date(2024, 2, 4, 17, 0, 0),
  },
  {
    id: 2,
    title: "Kelompok 2",
    start: new Date(2024, 2, 4, 15, 0, 0),
    end: new Date(2024, 2, 4, 17, 0, 0),
  },
  {
    id: 3,
    title: "Kelompok 3",
    start: new Date(2024, 2, 4, 15, 0, 0),
    end: new Date(2024, 2, 4, 17, 0, 0),
    allday: false,
  },
];

function Dashboard() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  const moveEvent = useCallback(
    ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
      const { allDay } = event;
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true;
      }

      setAllEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end, allDay }];
      });
    },
    [setAllEvents]
  );

  const resizeEvent = useCallback(
    ({ event, start, end }) => {
      setAllEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end }];
      });
    },
    [setAllEvents]
  );

  function handleAddEvent() {
    const id = allEvents.length + 1;
    setAllEvents([...allEvents, { ...newEvent, id }]);
  }

  const handleDeleteEvent = useCallback(
    (event) => {
      if (
        window.confirm(
          `Are you sure you want to delete the event "${event.title}"?`
        )
      ) {
        setAllEvents(allEvents.filter((e) => e.id !== event.id));
      }
    },
    [allEvents, setAllEvents]
  );

  return (
    <div
      className="container"
      style={{
        padding: "5%",
      }}
    >
      <h1 style={{ paddingBottom: "30px", textAlign: "center" }}>
        Selamat Datang, Praktikan
      </h1>
      <div className="App">
        <div>
          <input
            type="text"
            placeholder="Add Title"
            style={{ width: "20%", marginRight: "10px" }}
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <DatePicker
            placeholderText="Start Date"
            style={{ marginRight: "10px" }}
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
            showTimeSelect
            dateFormat="Pp"
          />
          <DatePicker
            placeholderText="End Date"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
            showTimeSelect
            dateFormat="Pp"
          />
          <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
            Add Event
          </button>
        </div>
        <DnDCalendar
          localizer={localizer}
          events={allEvents}
          onEventDrop={moveEvent}
          onEventResize={resizeEvent}
          onSelectEvent={handleDeleteEvent}
          popup
          resizable
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600, margin: "50px" }}
        />
      </div>
    </div>
  );
}
export default Dashboard;
