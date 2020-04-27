import React, { useState } from "react";
import "./App.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="App">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    </div>
  );
}

export default App;
