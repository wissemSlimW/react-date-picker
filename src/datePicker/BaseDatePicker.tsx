import { ThemeProvider } from "react-jss";
import { BaseDatePickerComponent } from "./components";
import { BaseDatePickerProps } from "./components/BaseDatePickerComponent/type";

export const BaseDatePicker = (props: BaseDatePickerProps) => {
  return (
    <ThemeProvider theme={props.theme}>
      <BaseDatePickerComponent {...props} />
    </ThemeProvider>
  );
};
