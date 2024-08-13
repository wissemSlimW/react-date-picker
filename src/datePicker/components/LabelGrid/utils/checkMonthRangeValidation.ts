import { Months } from "../../BaseDatePickerComponent/type";

export const checkMonthRangeValidation = (props: {
  value: Months;
  dateOnDisplay: Date;
  max: Date | undefined;
  min: Date | undefined;
}): boolean => {
  if (
    props.max &&
    props.value > props.max.getMonth() &&
    props.dateOnDisplay.getFullYear() >= props.max.getFullYear()
  )
    return false;
  if (
    props.min &&
    props.value < props.min.getMonth() &&
    props.dateOnDisplay.getFullYear() <= props.min.getFullYear()
  )
    return false;
  return true;
};
