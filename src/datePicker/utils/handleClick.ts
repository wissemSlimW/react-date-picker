import moment from "moment";
import {
  ActionSetter,
  DateRangeProps,
  OnChange,
  OnChangeAction,
  OnChangeRange,
} from "../components/BaseDatePickerComponent/type";
import { handleDateRangeCases } from "./handleDateRangeCases";
type onClick<T> = (props: {
  isDateRange: boolean;
  dateOnDisplay: Date;
  value: Date | DateRangeProps | undefined;
  onChange: OnChangeAction;
  setDateOnDisplay: ActionSetter<Date>;
  setCurrentViewIndex: ActionSetter<number>;
}) => (value: T) => void;
// determins the click event depending on the mode and the view
export const clickModes: {
  day: { day: onClick<Date>; month: onClick<number>; year: onClick<number> };
  month: {
    month: onClick<number>;
    year: onClick<number>;
  };
  year: {
    year: onClick<number>;
  };
} = {
  day: {
    day: (props) => (date) => {
      props.isDateRange
        ? (props.onChange as OnChangeRange)!(
            props.value
              ? handleDateRangeCases({
                  date,
                  end: (props.value as DateRangeProps).end,
                  start: (props.value as DateRangeProps).start,
                })
              : { start: date, end: date }
          )
        : (props.onChange as OnChange)!(date);
      props.setDateOnDisplay(date);
    },
    month: (props) => (val) => {
      props.setDateOnDisplay((prev) => moment(prev).set("month", val).toDate());
      props.setCurrentViewIndex((prev) => (prev > 0 ? prev - 1 : prev));
    },
    year: (props) => (val) => {
      props.setDateOnDisplay((prev) =>
        moment(prev)
          // we do get the index of the element clicked and we do know that the first element on the list
          // is always the year of the displayed element so we add the index to the year to get the new value.
          .set("year", prev.getFullYear() + val)
          .toDate()
      );
      props.setCurrentViewIndex((prev) => (prev > 0 ? prev - 1 : prev));
    },
  },
  month: {
    month: (props) => (val) => {
      props.isDateRange
        ? (props.onChange as OnChangeRange)!(
            props.value
              ? handleDateRangeCases({
                  date: new Date(props.dateOnDisplay.getFullYear(), val),
                  end: (props.value as DateRangeProps).end,
                  start: (props.value as DateRangeProps).start,
                })
              : {
                  start: new Date(props.dateOnDisplay.getFullYear(), val),
                  end: new Date(props.dateOnDisplay.getFullYear(), val),
                }
          )
        : (props.onChange as OnChange)!(
            new Date(props.dateOnDisplay.getFullYear(), val)
          );
    },
    year: (props) => (val) => {
      props.setDateOnDisplay((prev) =>
        moment(prev)
          // we do get the index of the element clicked and we do know that the first element on the list
          // is always the year of the displayed element so we add the index to the year to get the new value.
          .set("year", prev.getFullYear() + val)
          .toDate()
      );
      props.setCurrentViewIndex((prev) => (prev > 0 ? prev - 1 : prev));
    },
  },
  year: {
    year: (props) => (val) => {
      props.isDateRange
        ? (props.onChange as OnChangeRange)!(
            props.value
              ? handleDateRangeCases({
                  date: new Date(props.dateOnDisplay.getFullYear() + val, 0, 1),
                  end: (props.value as DateRangeProps).end,
                  start: (props.value as DateRangeProps).start,
                })
              : {
                  start: new Date(
                    props.dateOnDisplay.getFullYear() + val,
                    0,
                    1
                  ),
                  end: new Date(props.dateOnDisplay.getFullYear() + val, 0, 1),
                }
          )
        : (props.onChange as OnChange)!(
            new Date(props.dateOnDisplay.getFullYear() + val, 0, 1)
          );
    },
  },
};
