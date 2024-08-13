import moment from "moment";
import { Months } from "../../BaseDatePickerComponent/type";

export const isInRangeMonth = (props: {
  value: Months;
  start: Date;
  end: Date;
  dateOnDisplay: Date;
}) => {
  if (
    props.end &&
    props.start &&
    props.value === props.start.getMonth() &&
    props.value === props.end.getMonth()
  )
    return false;
  if (props.end && props.start)
    return (
      moment(
        new Date(props.dateOnDisplay.getFullYear(), props.value)
      ).isSameOrBefore(props.end) &&
      moment(
        new Date(props.dateOnDisplay.getFullYear(), props.value)
      ).isSameOrAfter(props.start)
    );
  return false;
};
