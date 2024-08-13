import moment from "moment";

export const checkDateRangeValidation = (props: {
  date: Date;
  max: Date | undefined;
  min: Date | undefined;
}): boolean => {
  if (props.max && moment(props.date).isAfter(props.max)) return false;
  if (props.min && moment(props.date).isBefore(props.min)) return false;
  return true;
};
