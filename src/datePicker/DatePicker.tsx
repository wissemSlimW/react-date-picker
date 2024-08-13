import { ThemeProvider } from "react-jss";
import { DatePickerComponent, DatePickerProps } from "./components";

export const DatePicker = (props: DatePickerProps) => {
  return (
    <ThemeProvider theme={props.theme}>
      <DatePickerComponent {...props} />
    </ThemeProvider>
  );
};
