import moment from "moment";
import { isSameDay } from "./isSameDay";

export const isInRange = (date: Date, startDate: Date, endDate: Date) => {
  if (date && isSameDay(date, startDate) && isSameDay(date, endDate))
    return false;
  if (endDate && startDate)
    return (
      moment(date).isSameOrBefore(moment(endDate).endOf("day")) &&
      moment(date).isSameOrAfter(moment(startDate).startOf("day"))
    );
  return false;
};
