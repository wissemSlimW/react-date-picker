import moment from "moment";
import {
  BaseDatePickerProps,
  DateRangeProps,
} from "../../BaseDatePickerComponent/type";
import { DayCellProps } from "../../DayCell/type";
import { isInRange } from "./isInRange";
import { isSameDay } from "./isSameDay";

export const getVariant = (
  props: Pick<
    BaseDatePickerProps,
    "maxDate" | "minDate" | "highlightedDays"
  > & {
    date: Date;
    isDateRange?: boolean;
    currentRange?: DateRangeProps;
    currentDate?: Date;
    dateOnDisplay: Date;
  }
): DayCellProps["variant"] => {
  if (!props.isDateRange && isSameDay(props.date, props.currentDate!))
    return "selected";
  if (
    props.isDateRange &&
    (isSameDay(props.date, props.currentRange?.end!) ||
      isSameDay(props.date, props.currentRange?.start!))
  )
    return "selected";
  if (isSameDay(props.date, new Date())) return "bordered";
  if (
    props.highlightedDays?.length &&
    props.highlightedDays.filter((day) => isSameDay(day.date, props.date))
      .length
  )
    return "highlighted";
  // determine whether the date is in the current month range or not
  if (
    !isInRange(
      props.date,
      moment(props.dateOnDisplay).startOf("month").toDate(),
      moment(props.dateOnDisplay).endOf("month").toDate()
    )
  )
    return "disabled";
  if (props.maxDate && moment(props.date).isAfter(props.maxDate))
    return "disabled";
  if (props.minDate && moment(props.date).isBefore(props.minDate))
    return "disabled";

  return "default";
};
