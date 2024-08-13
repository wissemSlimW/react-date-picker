import moment from "moment";
import { DateRangeProps } from "../components/BaseDatePickerComponent/type";

export const handleDateRangeCases = (
  props: { date: Date } & DateRangeProps
): DateRangeProps => {
  if (
    moment(props.date).isAfter(props.start) &&
    moment(props.date).isAfter(props.end)
  )
    return { end: props.date, start: props.start };
  if (
    moment(props.date).isBefore(props.start) &&
    moment(props.date).isBefore(props.end)
  )
    return { end: props.end, start: props.date };
  if (props.date.toLocaleDateString() === props.start.toLocaleDateString())
    return { end: props.end, start: props.end };
  if (props.date.toLocaleDateString() === props.end.toLocaleDateString())
    return { end: props.start, start: props.start };
  return { end: props.date, start: props.start };
};
