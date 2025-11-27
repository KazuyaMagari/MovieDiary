import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { useState } from "react";
import styled from "styled-components";


function App() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateClick = (arg: any) => {
    setSelectedDate(arg.dateStr);
    console.log("選択された日付:", selectedDate);
  };

  return (
    <AppContainer>
      <CalendarContainer>
        <FullCalendar
          locales={allLocales}
          locale="ja"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          height="auto"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          views={{
            dayGridMonth: { buttonText: '月' },
            timeGridWeek: { buttonText: '週' },
            timeGridDay: { buttonText: '日' },
          }}
          dateClick={handleDateClick}
        />
      </CalendarContainer>
      {selectedDate && (
        <div style={{ marginTop: '20px', fontSize: '16px' }}>
          選択された日付: {selectedDate}
        </div>
      )}
    </AppContainer>
  );
}


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const CalendarContainer = styled.div`
  margin: 40px auto;
  padding: 0 20px;
  max-width: 80vw;
  width: 100%;
`;

export default App;
