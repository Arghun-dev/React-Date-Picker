# English React-Date-Picker

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

to see more beautiful datepickers:

https://react.rocks/tag/DatePicker

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



# Persian DatePicker

Installation:

```
$. yarn add react-modern-calendar-datepicker
```

Or

```
$. npm i react-modern-calendar-datepicker
```

After the installation, it's time to import the package in your app:

```
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
```


Welcome to docs! react-modern-calendar-datepicker (a quite long name!) is a react date picker package supporting other languages locales(for now there are fa and en locales). It's lightweight, and it's easy to use. Before using this package, please pay attention to these two important points:

locale='fa'

1- This package uses React hooks. Make sure you're running react >= 16.8.0 version.
2- By default, this package inherits font-family from your project. So whatever font you use for its wrapper, it will apply to datepicker as well. (If you are using fa locale language, it's recommended to use Iran Yekan (primary choice) or Iran Sans as your font family in order to have the best user experience)

### Core Concepts

Now that you've installed the package. It's the time to get familiarized with the core concepts of react-modern-calendar-datepicker. In a nutshell, there are two major components available to import:

1- `<DatePicker />` default-exported component which includes an input and a calendar.
2- `<Calendar />` component which is the calendar itself.


Basic Usage:

```
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
```

To react all other concepts and tips of this datepicker go to this website:

https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/core-concepts
