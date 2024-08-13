import moment from "moment";
import { ArrowDown, ArrowLeft, ArrowRight } from "../../assets";
import { useAppTheme } from "../../styles/theme";
import { useStyles } from "./style";
import { Actions, NavigatorProps } from "./type";
import { View } from "../BaseDatePickerComponent/type";
import { useCallback, useMemo } from "react";

export const Navigator = (props: NavigatorProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });

  const checkNavigation = useCallback(
    (props: NavigatorProps & { date: Date; type: "inc" | "dec" }) => {
      const isInRangeEdge = (props: {
        date: Date;
        startDate: Date;
        endDate: Date;
        type: "inc" | "dec";
      }) => {
        const methodNames = { inc: "endOf", dec: "startOf" } as const;
        return (
          moment(moment(props.date)[methodNames[props.type]]("day")).isBefore(
            moment(props.endDate)[methodNames[props.type]]("day")
          ) &&
          moment(props.date).isAfter(
            moment(props.startDate)[methodNames[props.type]]("day")
          )
        );
      };
      const modes = {
        day: { amount: 1, unit: "month" },
        month: { amount: 1, unit: "year" },
        year: { amount: 12, unit: "year" },
      } as const;
      const params = {
        inc: {
          operation: "add",
          value: props.maxDate,
          date: moment(props.date)
            .endOf(modes[props.currentView].unit)
            .toDate(),
        },
        dec: {
          operation: "subtract",
          value: props.minDate,
          date: moment(props.date)
            .startOf(modes[props.currentView].unit)
            .toDate(),
        },
      } as const;

      const rangeParams = {
        inc: {
          startDate: params[props.type].date,
          endDate: moment(params[props.type].date)
            [params[props.type].operation](
              modes[props.currentView].amount,
              modes[props.currentView].unit
            )
            .toDate(),
        },
        dec: {
          startDate: moment(params[props.type].date)
            [params[props.type].operation](
              modes[props.currentView].amount,
              modes[props.currentView].unit
            )
            .toDate(),
          endDate: params[props.type].date,
        },
      };
      const isInRange = {
        inc: moment(params.inc.date).isBefore(params.inc.value),
        dec: moment(params.dec.date).isAfter(params.dec.value),
      };
      return (
        !params[props.type].value ||
        isInRange[props.type] ||
        isInRangeEdge({
          date: params[props.type].value!,
          type: props.type,
          ...rangeParams[props.type],
        })
      );
    },
    [props]
  );
  const getAction = useCallback(
    (props: NavigatorProps & { mode: View; type: "inc" | "dec" }) => {
      const params = {
        day: { unit: "month", amount: 1 },
        month: { unit: "year", amount: 1 },
        year: { unit: "year", amount: 12 },
      } as const;
      const operations = { inc: "add", dec: "subtract" } as const;
      return () => {
        props.setDateOnDisplay((prev) =>
          !props.restrictOutOfRangeNavigation
            ? moment(prev)
                [operations[props.type]](
                  params[props.mode].amount,
                  params[props.mode].unit
                )
                .toDate()
            : checkNavigation({ ...props, date: prev, type: props.type })
            ? moment(prev)
                [operations[props.type]](
                  params[props.mode].amount,
                  params[props.mode].unit
                )
                .toDate()
            : prev
        );
      };
    },
    [props]
  );
  const actions: Actions = useMemo(
    () => ({
      inc: {
        day: getAction({ ...props, mode: "day", type: "inc" }),
        month: getAction({ ...props, mode: "month", type: "inc" }),
        year: getAction({ ...props, mode: "year", type: "inc" }),
      },
      dec: {
        day: getAction({ ...props, mode: "day", type: "dec" }),
        month: getAction({ ...props, mode: "month", type: "dec" }),
        year: getAction({ ...props, mode: "year", type: "dec" }),
      },
    }),
    [props]
  );
  const formats: Record<View, string> = useMemo(
    () => ({
      day: moment(props.dateOnDisplay).format("MMMM YYYY"),
      month: moment(props.dateOnDisplay).format("MMMM YYYY"),
      year: `${moment(props.dateOnDisplay).format("YYYY")} - ${moment(
        moment(props.dateOnDisplay).add(11, "year").toDate()
      ).format("YYYY")}`,
    }),
    [props.dateOnDisplay]
  );
  return (
    <div className={classes.container}>
      <span
        className={classes.navigationLabel}
        onClick={props.handleChangeView}
      >
        {formats[props.currentView]}
        <ArrowDown />
      </span>
      <span className={classes.navigationBtns}>
        <span
          className={classes.navigationBtn}
          onClick={actions.dec[props.currentView]}
        >
          <ArrowLeft />
        </span>
        <span
          className={classes.navigationBtn}
          onClick={actions.inc[props.currentView]}
        >
          <ArrowRight />
        </span>
      </span>
    </div>
  );
};
