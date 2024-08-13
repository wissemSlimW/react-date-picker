import moment from "moment";
import { rotateArrayLeft } from "../../../utils";
import { BaseDatePickerProps } from "../../BaseDatePickerComponent/type";

export const getWeekEdges = (
  date: Date,
  startDay: BaseDatePickerProps["weekStartDay"]
) => {
  const day = moment(date).day();
  const list = rotateArrayLeft(
    Array(7)
      .fill("")
      .map((_, i) => i),
    startDay
  );
  const index = list.indexOf(day);
  return [
    moment(date).subtract(index, "day").toDate(),
    moment(date)
      .add(7 - index - 1, "day")
      .toDate(),
  ];
};
