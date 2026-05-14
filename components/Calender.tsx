"use client"

import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";


const tasks = [
  {
  title:"タスクA",
  date:"2026-05-13",
  backgroundColor: "#93c5fd"
},
  {
  title:"タスクBBB",
  date:"2026-05-14",
  backgroundColor: "#8b5cf6"
},
]


const Calendar = () => {
  return (
    <div className="w-100">
        <FullCalendar
          plugins={[dayGridPlugin]}
          events={tasks}
        />


    </div>
    
  )
}

export default Calendar
