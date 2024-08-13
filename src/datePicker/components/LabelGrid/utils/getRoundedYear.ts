import { DateRangeProps } from "../../BaseDatePickerComponent/type";
import { LabelCellProps } from "../../LabelCell/type";

export const getRoundedYear = (props: {
  value: number;
  index:number
  isDateRange?: boolean;
  currentRange?: DateRangeProps;
}): LabelCellProps["rounded"] => {
  if (
    props.isDateRange &&
    props.value === props.currentRange?.end!.getFullYear()
  )
    return "end";
  if (
    props.isDateRange &&
    props.value === props.currentRange?.start!.getFullYear()
  )
    return "start";
  if ((props.index + 1) % 3 === 0) return "end";
  if ((props.index + 1) % 3 === 1) return "start";
  return false;
};
