import moment from "moment";
import { DayCellProps } from "../../DayCell/type";

export const isCrossed = (
  date: Date,
  startDate: Date,
  endDate: Date
): DayCellProps["crossed"] => {
  if (date.toLocaleDateString() === startDate.toLocaleDateString())
    return "start";
  if (date.toLocaleDateString() === endDate.toLocaleDateString()) return "end";
  if (
    moment(date).isSameOrBefore(endDate) &&
    moment(date).isSameOrAfter(startDate)
  )
    return true;
  return false;
};
