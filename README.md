# React-Date-Picker

### Simple Version

Installation:

```
$. yarn add react-datepicker
```

Usage:

```
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
```


### Beautiful Version

Installation:

```
$. npm install react-infinite-calendar --save
```

Usage:

```
import React, { useState } from "react";
import "./App.css";

import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css"; // Make sure to import the default stylesheet

var today = new Date();
var lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="App">
      <InfiniteCalendar
        width={300}
        height={300}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
}

export default App;

```
