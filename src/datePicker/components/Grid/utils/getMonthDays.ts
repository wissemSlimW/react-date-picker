import moment from "moment";
import { BaseDatePickerProps } from "../../BaseDatePickerComponent/type";

type GetMonthDay = (
  props: Pick<BaseDatePickerProps, "weekStartDay"> & { date: Date }
) => Date[];
export const getMonthDay: GetMonthDay = ({ weekStartDay = 0, ...props }) => {
  const WeekEndDay = weekStartDay === 0 ? 6 : weekStartDay - 1;
  const getDayStartDifferenceCount = (curr: number, start: number) =>
    curr >= start ? curr - start : curr + 7 - start;
  const getDayEndDifferenceCount = (curr: number, end: number) =>
    curr <= end ? end - curr : 7 - curr + end;
  const startOfMonth = moment(props.date).startOf("month").toDate();
  const startOfMonthDay = moment(startOfMonth).day();
  const startOfWeek = moment(startOfMonth)
    .subtract(getDayStartDifferenceCount(startOfMonthDay, weekStartDay), "day")
    .toDate();
  const endOfMonth = moment(props.date).endOf("month").toDate();
  const endOfMonthDay = moment(endOfMonth).day();
  const endOfWeek = moment(endOfMonth)
    .add(getDayEndDifferenceCount(endOfMonthDay, WeekEndDay), "day")
    .toDate();
  const monthDays = [];
  const start = moment(startOfWeek);
  while (start.isBefore(endOfWeek)) {
    monthDays.push(start.toDate());
    start.add(1, "day");
  }
  return monthDays;
};
