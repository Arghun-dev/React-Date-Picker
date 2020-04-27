import React, { useState } from "react";
import "./App.css";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="App">
      <DatePicker
        width={300}
        height={300}
        value={selectedDate}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        locale="fa"
        shouldHighlightWeekends
      />
    </div>
  );
}

export default App;
