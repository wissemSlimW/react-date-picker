import moment from "moment";
import { useMemo } from "react";
import { useAppTheme } from "../../styles/theme";
import { WeekDays } from "../BaseDatePickerComponent/type";
import { rotateArrayLeft } from "../../utils";
import { DayCell } from "../DayCell";
import { useStyles } from "./style";
import { GridProps } from "./type";
import {
  checkDateRangeValidation,
  getMonthDay,
  getRounded,
  getVariant,
  getWeekEdges,
  isCrossed,
  isInRange,
  isSameDay,
} from "./utils";

export const Grid = (props: GridProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });

  const dates = useMemo(
    () =>
      getMonthDay({
        date: props.dateOnDisplay,
        weekStartDay: props.weekStartDay,
      }),
    [props.weekStartDay, props.dateOnDisplay]
  );
  // this section should only work if this property "highlightEntireWeek" is true
  const [startWeekDate, endWeekDate] = useMemo(
    () =>
      props.highlightEntireWeek
        ? getWeekEdges(props.currentDate!, props.weekStartDay)
        : [null! as Date, null! as Date],
    [props.currentDate, props.weekStartDay, props.highlightEntireWeek]
  );
  const getTitle = (date: Date, days: GridProps["highlightedDays"]) =>
    days?.length
      ? days
          .filter((day) => isSameDay(day.date, date))
          .map((day) => day.label)
          .join(",")
      : "";

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        {rotateArrayLeft(
          Array(7)
            .fill("")
            .map((_, i) => i),
          props.weekStartDay
        ).map((i) => (
          <span key={i} className={classes.dayName}>
            {props.dayNames?.[i as WeekDays]}
          </span>
        ))}
      </div>
      <div className={classes.body}>
        {dates.map((date, i) => (
          <DayCell
            key={i}
            title={getTitle(date, props.highlightedDays)}
            onClick={() =>
              checkDateRangeValidation({
                date,
                max: props.maxDate,
                min: props.minDate,
              }) && props.onClick(date)
            }
            variant={getVariant({
              maxDate: props.maxDate,
              minDate: props.minDate,
              date,
              isDateRange: props.isDateRange,
              currentDate: props.currentDate,
              currentRange: props.currentRange,
              dateOnDisplay: props.dateOnDisplay,
              highlightedDays: props.highlightedDays,
            })}
            value={moment(date).format("DD")}
            {...(props.isDateRange
              ? {
                  inRange: isInRange(
                    date,
                    props.currentRange?.start!,
                    props.currentRange?.end!
                  ),
                }
              : {})}
            rounded={getRounded({
              index: i,
              date,
              currentRange: props.currentRange,
              isDateRange: props.isDateRange,
            })}
            {...(props.highlightEntireWeek &&
            !props.isDateRange &&
            props.currentDate
              ? { crossed: isCrossed(date, startWeekDate, endWeekDate) }
              : {})}
          />
        ))}
      </div>
    </div>
  );
};
