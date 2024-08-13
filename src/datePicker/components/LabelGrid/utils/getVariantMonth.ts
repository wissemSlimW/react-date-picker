import {
  BaseDatePickerProps,
  DateRangeProps,
  Months,
} from "../../BaseDatePickerComponent/type";
import { LabelCellProps } from "../../LabelCell/type";

export const getVariantMonth = (
  props: Pick<BaseDatePickerProps, "maxDate" | "minDate"> & {
    value: Months;
    isDateRange?: boolean;
    currentRange?: DateRangeProps;
    currentDate?: Date;
    dateOnDisplay: Date;
  }
): LabelCellProps["variant"] => {
  if (
    !props.isDateRange &&
    props.value === props.currentDate!.getMonth() &&
    props.dateOnDisplay.getFullYear() === props.currentDate?.getFullYear()
  )
    return "selected";
  if (
    props.isDateRange &&
    ((props.value === props.currentRange?.end!.getMonth() &&
      props.dateOnDisplay.getFullYear() ===
        props.currentRange.end?.getFullYear()) ||
      (props.dateOnDisplay.getFullYear() ===
        props.currentRange?.start?.getFullYear() &&
        props.value === props.currentRange?.start!.getMonth()))
  )
    return "selected";
  if (
    props.maxDate &&
    props.value > props.maxDate.getMonth() &&
    props.dateOnDisplay.getFullYear() >= props.maxDate.getFullYear()
  )
    return "disabled";
  if (
    props.minDate &&
    props.value < props.minDate.getMonth() &&
    props.dateOnDisplay.getFullYear() <= props.minDate.getFullYear()
  )
    return "disabled";
  if (
    props.dateOnDisplay?.getFullYear() === new Date().getFullYear() &&
    props.value === new Date().getMonth()
  )
    return "bordered";
  return "default";
};
