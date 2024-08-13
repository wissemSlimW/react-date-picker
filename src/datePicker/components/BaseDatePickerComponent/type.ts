export type Day = "day";
export type Month = "month";
export type Year = "year";
export type View = Day | Month | Year;
export type WeekDays = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type Months = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type DayNames = Record<WeekDays, string | React.ReactElement>;
export type MonthNames = Record<Months, string | React.ReactElement>;
export type HighlightedDay = {
  date: Date;
  label: string;
};
export type DateActionProps = {
  isDateRange?: false;
  value?: Date;
  onChange: (newDate: Date) => void;
};
export type RangedDateActionProps = {
  isDateRange: true;
  value?: DateRangeProps;
  onChange: (props: DateRangeProps) => void;
  ActiveDateOnDisplay?: "start" | "end";
  displayRange?: boolean;
  dateRangeDisplayFormat?: string;
};

export type BaseDatePickerMainProps = {
  theme: Theme;
  mode?: View;
  dayNames?: DayNames;
  monthNames?: MonthNames;
  weekStartDay?: WeekDays;
  highlightEntireWeek?: Boolean;
  openView?: View;
  maxDate?: Date;
  minDate?: Date;
  restrictOutOfRangeNavigation?: boolean;
  highlightedDays?: HighlightedDay[];
};
export type BaseDatePickerDateProps = BaseDatePickerMainProps & DateActionProps;

export type BaseDatePickerDateRangeProps = BaseDatePickerMainProps &
  RangedDateActionProps;
/**
 *
 * @param theme -@typedef {(object)} -@description determins the
 * @param onChange -@description This callback controls the datePicker changes.
 * @param value -@typedef {(Date | {start:Date, end: Date} | undefined)}
 * @param isDateRange - optional -@typedef {(boolean)} -@description determins whether the date picker is range or date based
 * @param mode - optional -@default day -@typedef {( day | month | year)} -@description determins the views that will be included on date picker
 * @param openView - optional -@default day -@typedef {(day | month | year)} -@description determins the view that will be displayed on the datePicker once opened
 * @param dayNames - optional -@typedef {(Record< 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, string | ReactElement>)}  -@description A Map of weekDay names.
 * @param monthNames - optional -@typedef {(Record< 0 | 1 |2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11, string | ReactElement>)} -@description A Map of month's names.
 * @param weekStartDay - optional -@typedef {(0 | 1 | 2 | 3 | 4 | 5 | 6 | 7)} -@default 0 -@description determins the datePicker week start Day
 * @param highlightEntireWeek - optional -@typedef {(boolean)} -@default false -@description (can only work if the property isDateRange is set to false) highlights the entire week of the selected date
 * @param ActiveDateOnDisplay - optional -@default end -@typedef {(end | start)}  -@description (can only passed is property isDateRange is set to true) determins the date that will be on display once the full range is set
 * @param maxDate - optional -@typedef {(Date)} -@description the maximum date that can be considared by the datePicker (date included) (out of range dates are disabled and non functional)
 * @param minDate - optional -@typedef {(Date)} -@description the minimum date that can be considared by the datePicker (date included) (out of range dates are disabled and non functional)
 * @param restrictOutOfRangeNavigation - optional -@default false -@typedef {(boolean)} -@description in case of the presence of maxDate or minDate this property controls whether the datepicker can navigate to higher dates or not.
 */
export type BaseDatePickerProps =
  | BaseDatePickerDateProps
  | BaseDatePickerDateRangeProps;

export type DateRangeProps = { start: Date; end: Date };
export type OnChange = (val: Date) => void;
export type OnChangeRange = (val: DateRangeProps) => void;
export type OnChangeAction = OnChange | OnChangeRange;
export type Value = Date | DateRangeProps;
export type ActionSetter<T> = React.Dispatch<React.SetStateAction<T>>;
