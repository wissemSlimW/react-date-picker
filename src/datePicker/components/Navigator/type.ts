import { ActionSetter, BaseDatePickerProps, View } from "../BaseDatePickerComponent/type";

export type NavigatorProps = Pick<BaseDatePickerProps,'maxDate'|'minDate'|'restrictOutOfRangeNavigation'>&{
  currentView: View;
  handleChangeView: () => void;
  dateOnDisplay: Date;
  setDateOnDisplay: ActionSetter<Date>;
};
export type Actions = Record<"inc" | "dec", Record<View, () => void>>;
