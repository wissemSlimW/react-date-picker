import { Months } from "../BaseDatePickerComponent/type";
import { LabelGrid } from "./LabelGrid";
import { LabelGridLayoutProps } from "./type";
import {
  getRoundedMonth,
  getVariantMonth,
  isInRangeMonth,
  getRoundedYear,
  getVariantYear,
  isInRangeYear,
  checkMonthRangeValidation,
  checkYearRangeValidation,
} from "./utils";
export const LabelGridLayout = (props: LabelGridLayoutProps) => {
  const methods = {
    month: {
      getVariant: getVariantMonth,
      isInRange: isInRangeMonth,
      getRounded: getRoundedMonth,
    },
    year: {
      getVariant: getVariantYear,
      isInRange: isInRangeYear,
      getRounded: getRoundedYear,
    },
  };
  return (
    <>
      {props.type === "month" && (
        <LabelGrid
          onClick={(val) =>
            checkMonthRangeValidation({
              dateOnDisplay: props.dateOnDisplay,
              max: props.maxDate,
              min: props.minDate,
              value: val as Months,
            }) && props.onClick(val)
          }
          getRounded={(index) =>
            methods.month.getRounded({
              value: index as Months,
              currentRange: props.currentRange,
              isDateRange: props.isDateRange,
              dateOnDisplay: props.dateOnDisplay,
            })
          }
          getVariant={(index) =>
            methods.month.getVariant({
              maxDate: props.maxDate,
              minDate: props.minDate,
              dateOnDisplay: props.dateOnDisplay,
              value: index as Months,
              currentDate: props.currentDate,
              currentRange: props.currentRange,
              isDateRange: props.isDateRange,
            })
          }
          isInRange={(index) =>
            methods.month.isInRange({
              dateOnDisplay: props.dateOnDisplay,
              end: props.currentRange?.end!,
              value: index as Months,
              start: props.currentRange?.start!,
            })
          }
          isDateRange={props.isDateRange}
          list={props.list}
        />
      )}
      {props.type === "year" && (
        <LabelGrid
          onClick={(val) =>
            checkYearRangeValidation({
              max: props.maxDate,
              min: props.minDate,
              value: Number(props.list[val]),
            }) && props.onClick(val)
          }
          getRounded={(index) =>
            methods.year.getRounded({
              index,
              value: Number(props.list[index]),
              currentRange: props.currentRange,
              isDateRange: props.isDateRange,
            })
          }
          getVariant={(index) =>
            methods.year.getVariant({
              maxDate: props.maxDate,
              minDate: props.minDate,
              dateOnDisplay: props.dateOnDisplay,
              value: Number(props.list[index]),
              currentDate: props.currentDate,
              currentRange: props.currentRange,
              isDateRange: props.isDateRange,
            })
          }
          isInRange={(index) =>
            methods.year.isInRange({
              end: props.currentRange?.end!,
              value: Number(props.list[index]),
              start: props.currentRange?.start!,
            })
          }
          isDateRange={props.isDateRange}
          list={props.list}
        />
      )}
    </>
  );
};
