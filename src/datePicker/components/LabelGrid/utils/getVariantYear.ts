import { BaseDatePickerProps, DateRangeProps } from "../../BaseDatePickerComponent/type";
import { LabelCellProps } from "../../LabelCell/type";

export const getVariantYear = (
  props: Pick<BaseDatePickerProps, "maxDate" | "minDate"> & {
    value: number;
    isDateRange?: boolean;
    currentRange?: DateRangeProps;
    currentDate?: Date;
    dateOnDisplay: Date;
  }
): LabelCellProps["variant"] => {
  if (!props.isDateRange && props.value === props.currentDate!.getFullYear())
    return "selected";
  if (
    props.isDateRange &&
    (props.value === props.currentRange?.end!.getFullYear() ||
      props.value === props.currentRange?.start!.getFullYear())
  )
    return "selected";
  if (props.maxDate && props.value > props.maxDate.getFullYear())
    return "disabled";
  if (props.minDate && props.value < props.minDate.getFullYear())
    return "disabled";
  if (props.value === new Date().getFullYear()) return "bordered";
  return "default";
};
