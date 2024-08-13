import {
  BaseDatePickerProps,
  DateActionProps,
  RangedDateActionProps,
} from "../BaseDatePickerComponent/type";

export type GridProps = Pick<
  BaseDatePickerProps,
  | "dayNames"
  | "weekStartDay"
  | "highlightEntireWeek"
  | "isDateRange"
  | "maxDate"
  | "minDate"
  | "highlightedDays"
> & {
  onClick: (date: Date) => void;
  currentDate?: DateActionProps["value"];
  currentRange?: RangedDateActionProps["value"];
  dateOnDisplay: Date;
};
