"use client"

import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction"



const tasks = [
  {
  title:"タスクA",
  date:"2026-06-13",
  backgroundColor: "#93c5fd"
},
  {
  title:"タスクBBB",
  date:"2026-06-14",
  backgroundColor: "#8b5cf6"
},
]


const Calendar = () => {
  const handleDateClick= (info: { dateStr: string })=>{
    console.log(info.dateStr)
  }
  return (
    <div className="mx-10">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          events={tasks}
          dateClick={handleDateClick}
        />
    </div>
    
  )
}

export default Calendar
