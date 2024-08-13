import moment from "moment";
import { useState } from "react";
import { BaseDatePicker, DatePicker } from "./datePicker";
import { BaseDatePickerDateRangeProps } from "./datePicker/";

const App = () => {
  const [value, setValue] = useState<BaseDatePickerDateRangeProps["value"]>();
  console.log({ value });
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <BaseDatePicker
        displayRange
        highlightedDays={[{ date: new Date(2024, 7, 16), label: "Aid Edh'ha" }]}
        // restrictOutOfRangeNavigation
        // maxDate={moment(new Date()).endOf("month").toDate()}
        weekStartDay={5}
        isDateRange
        mode="day"
        openView="day"
        ActiveDateOnDisplay="start"
        // highlightEntireWeek
        value={value}
        onChange={(date) => setValue(date)}
        theme={{
          fontFamily: "Poppins",
          fonts: {
            xxl: {
              fontSize: 16,
              fontWeight: 600,
            },
            xl: {
              fontSize: 14,
              fontWeight: 600,
            },
            lg: {
              fontSize: 14,
              fontWeight: 500,
            },
            md: {
              fontSize: 12,
              fontWeight: 500,
            },
            sm: {
              fontSize: 12,
              fontWeight: 400,
            },
          },
          colors: {
            content: "#5F6C7B",
            lightContent: "#EBEBEB",
            default: "#FFFFFF",
            lighSecondary: "#EFFBFE",
            lightPrimary: "#99d0fe",
            primary: "#3DA9FC",
            secondary: "#D8EEFE",
            standard: "#333333",
          },
        }}
      />
      <BaseDatePicker
        isDateRange
        ActiveDateOnDisplay="end"
        
        onChange={(date) => setValue(date)}
        value={value}
        theme={{
          fontFamily: "Poppins",
          fonts: {
            xxl: {
              fontSize: 16,
              fontWeight: 600,
            },
            xl: {
              fontSize: 14,
              fontWeight: 600,
            },
            lg: {
              fontSize: 14,
              fontWeight: 500,
            },
            md: {
              fontSize: 12,
              fontWeight: 500,
            },
            sm: {
              fontSize: 12,
              fontWeight: 400,
            },
          },
          colors: {
            content: "#5F6C7B",
            lightContent: "#EBEBEB",
            default: "#FFFFFF",
            lighSecondary: "#EFFBFE",
            lightPrimary: "#99d0fe",
            primary: "#3DA9FC",
            secondary: "#D8EEFE",
            standard: "#333333",
          },
        }}
      />
    </div>
  );
};

export default App;
