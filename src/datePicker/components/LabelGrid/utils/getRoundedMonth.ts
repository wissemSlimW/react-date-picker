import { DateRangeProps, Months } from "../../BaseDatePickerComponent/type";
import { LabelCellProps } from "../../LabelCell/type";

export const getRoundedMonth = (props: {
  value: Months;
  isDateRange?: boolean;
  currentRange?: DateRangeProps;
  dateOnDisplay: Date;
}): LabelCellProps["rounded"] => {
  if (
    props.isDateRange &&
    props.value === props.currentRange?.end!.getMonth() &&
    props.currentRange?.end!.getFullYear() === props.dateOnDisplay.getFullYear()
  )
    return "end";
  if (
    props.isDateRange &&
    props.value === props.currentRange?.start!.getMonth() &&
    props.currentRange?.start!.getFullYear() ===
      props.dateOnDisplay.getFullYear()
  )
    return "start";
  if ((props.value + 1) % 3 === 0) return "end";
  if ((props.value + 1) % 3 === 1) return "start";
  return false;
};
