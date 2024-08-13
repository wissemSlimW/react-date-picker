import { DateRangeProps } from "../../BaseDatePickerComponent/type";
import { DayCellProps } from "../../DayCell/type";
import { isSameDay } from "./isSameDay";

export const getRounded = (props: {
  index: number;
  date: Date;
  isDateRange?: boolean;
  currentRange?: DateRangeProps;
}): DayCellProps["rounded"] => {
  if (props.isDateRange && isSameDay(props.date, props.currentRange?.end!))
    return "end";
  if (props.isDateRange && isSameDay(props.date, props.currentRange?.start!))
    return "start";
  if ((props.index + 1) % 7 === 0) return "end";
  if ((props.index + 1) % 7 === 1) return "start";
  return false;
};
