import { useEffect, useMemo, useState } from "react";
import {
  DEFAULT_DAYS_NAME,
  MODES,
  MONTH_NAMES,
} from "../../assets/defaultValues";
import { Grid, Navigator } from "..";
import { LabelGridLayout } from "../LabelGrid/LabelGridLayout";
import { LabelGridLayoutProps } from "../LabelGrid/type";
import { useStyles } from "./style";
import { useAppTheme } from "../../styles/theme";
import {
  BaseDatePickerDateRangeProps,
  BaseDatePickerProps,
  DateRangeProps,
  View,
} from "./type";
import { clickModes } from "../../utils";
import moment from "moment";

export const BaseDatePickerComponent = ({
  dayNames = DEFAULT_DAYS_NAME,
  monthNames = MONTH_NAMES,
  mode = "day",
  openView = "day",
  ...props
}: BaseDatePickerProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });

  // determins the type of the upcoming props depending on the isDateRange Property
  const isDateRangeCheck = (
    data: BaseDatePickerProps
  ): data is BaseDatePickerDateRangeProps => Boolean(data.isDateRange);

  // these function determins the type of mode (not the value ) depending on the view
  const isDayMode = (index: number, mode: View, views: View[]): mode is "day" =>
    index === views.indexOf("day");
  const isMonthMode = (
    index: number,
    mode: View,
    views: View[]
  ): mode is "month" => index === views.indexOf("month");
  const isYearMode = (
    index: number,
    mode: View,
    views: View[]
  ): mode is "year" => index === views.indexOf("year");

  const [dateOnDisplay, setDateOnDisplay] = useState<Date>(
    (isDateRangeCheck(props) ? props.value?.end! : (props.value! as Date)) ||
      props.minDate ||
      props.maxDate ||
      new Date()
  );

  // checks the views that can be displayed depending on the mode
  const VIEWS: View[] = useMemo(() => MODES[mode], [mode]);

  // checks which view should be displayed on first mount
  const [currentViewIndex, setCurrentViewIndex] = useState<number>(
    MODES[mode].indexOf(openView) === -1 ? 0 : MODES[mode].indexOf(openView)
  );

  // handle the view changes upon click
  const handleChangeView = () => {
    if (currentViewIndex !== VIEWS.length - 1)
      setCurrentViewIndex((prev) => prev + 1);
    else setCurrentViewIndex(0);
  };

  // determins the years that will be displayed on the grid depending on the cuurent date on display
  const yearsOnDisplay = useMemo((): Record<string, string> => {
    const year = dateOnDisplay?.getFullYear();
    return Object.fromEntries(
      Array(12)
        .fill("")
        .map((_, i) => [String(i), String(year + i)])
    );
  }, [dateOnDisplay]);

  // this state is used to store the old range dates to help control the change of date on display
  const [storeDate, setStoreDates] = useState<DateRangeProps>();

  // this part controls the change of display to the start or the end of the selected range depending on the ActiveDateOnDisplay property value
  useEffect(() => {
    if (storeDate !== props.value && props.isDateRange) {
      const dates = props.value as DateRangeProps;
      if (dates?.end && !moment(dates?.start).isSame(dates?.end)) {
        if (props.ActiveDateOnDisplay === "start") {
          props.minDate &&
            moment(props.minDate).isSameOrBefore(dates.start) &&
            setDateOnDisplay(dates?.start);
        } else {
          if (mode === "day") {
            props.maxDate &&
              moment(props.maxDate).isSameOrAfter(dates.end) &&
              setDateOnDisplay(dates?.end);
          } else {
            const deffMode = {
              month: moment
                .duration(
                  moment(dates?.end).diff(moment(dateOnDisplay).startOf("year"))
                )
                .asMonths(),
              year: dates?.end.getFullYear() - dateOnDisplay.getFullYear(),
            };
            if (deffMode[mode] > 12 || deffMode[mode] < 0) {
              props.maxDate &&
                moment(props.maxDate).isSameOrAfter(
                  mode === "month"
                    ? dates?.end
                    : moment(dates?.end).subtract(4, "year").toDate()
                ) &&
                setDateOnDisplay(
                  mode === "month"
                    ? dates?.end
                    : moment(dates?.end).subtract(4, "year").toDate()
                );
            }
          }
        }
        setStoreDates(dates);
      }
    }
  }, [props.value, props, storeDate]);
  // determins the label displayed for the date range
  const getDisplayedDate = (date: Date, format: string) =>
    date ? moment(date).format(format) : format;
  // set the action that navigates to the clicked date
  const handleRangeDateClick = (date: Date) => date && setDateOnDisplay(date);
  // TODO check if navigation to out of range by clicking on the edges date are acceptable ?

  return (
    <div className={classes.container}>
      <Navigator
        maxDate={props.maxDate}
        minDate={props.minDate}
        restrictOutOfRangeNavigation={props.restrictOutOfRangeNavigation}
        handleChangeView={handleChangeView}
        currentView={VIEWS[currentViewIndex]}
        dateOnDisplay={dateOnDisplay}
        setDateOnDisplay={setDateOnDisplay}
      />
      {isDateRangeCheck(props) && !!props.displayRange && (
        <span className={classes.dateRangeContainer}>
          <span
            className={classes.dateRangeBtn}
            onClick={() =>
              handleRangeDateClick((props.value as DateRangeProps)?.start)
            }
          >
            {getDisplayedDate(
              (props.value as DateRangeProps)?.start,
              props.dateRangeDisplayFormat || "DD/MM/YYYY"
            )}
          </span>
          {" - "}
          <span
            className={classes.dateRangeBtn}
            onClick={() =>
              handleRangeDateClick((props.value as DateRangeProps)?.end)
            }
          >
            {getDisplayedDate(
              (props.value as DateRangeProps)?.end,
              props.dateRangeDisplayFormat || "DD/MM/YYYY"
            )}
          </span>
        </span>
      )}
      {isDayMode(currentViewIndex, mode, VIEWS) && (
        <Grid
          highlightedDays={props.highlightedDays}
          maxDate={props.maxDate}
          minDate={props.minDate}
          onClick={clickModes[mode].day({
            value: props.value,
            dateOnDisplay,
            isDateRange: !!props.isDateRange,
            onChange: props.onChange,
            setCurrentViewIndex,
            setDateOnDisplay,
          })}
          isDateRange={props.isDateRange}
          {...(props.isDateRange
            ? {
                currentRange: props.value as DateRangeProps,
              }
            : {
                currentDate: props.value as Date,
              })}
          dateOnDisplay={dateOnDisplay}
          dayNames={dayNames}
          weekStartDay={props.weekStartDay}
          highlightEntireWeek={!!props.highlightEntireWeek}
        />
      )}
      {isMonthMode(currentViewIndex, mode, VIEWS) && (
        <LabelGridLayout
          maxDate={props.maxDate}
          minDate={props.minDate}
          onClick={clickModes[mode].month({
            value: props.value,
            dateOnDisplay,
            isDateRange: !!props.isDateRange,
            onChange: props.onChange,
            setCurrentViewIndex,
            setDateOnDisplay,
          })}
          isDateRange={props.isDateRange}
          {...(props.isDateRange
            ? {
                currentRange: props.value as DateRangeProps,
              }
            : {
                currentDate: props.value as Date,
              })}
          dateOnDisplay={dateOnDisplay}
          list={monthNames as LabelGridLayoutProps["list"]}
          type="month"
        />
      )}
      {isYearMode(currentViewIndex, mode, VIEWS) && (
        <LabelGridLayout
          maxDate={props.maxDate}
          minDate={props.minDate}
          onClick={clickModes[mode].year({
            value: props.value,
            dateOnDisplay,
            isDateRange: !!props.isDateRange,
            onChange: props.onChange,
            setCurrentViewIndex,
            setDateOnDisplay,
          })}
          isDateRange={props.isDateRange}
          {...(props.isDateRange
            ? {
                currentRange: props.value as DateRangeProps,
              }
            : {
                currentDate: props.value as Date,
              })}
          dateOnDisplay={dateOnDisplay}
          list={yearsOnDisplay}
          type="year"
        />
      )}
    </div>
  );
};
