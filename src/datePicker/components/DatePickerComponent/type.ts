import { BaseDatePickerProps } from "../BaseDatePickerComponent";

/**
 *
 * @param theme -@typedef {(object)} -@description determins the
 * @param onChange -@description This callback controls the datePicker changes.
 * @param value -@typedef {(Date | {start:Date, end: Date} | undefined)}
 * @param labels - optional @typedef {({ title: string; submitBtn: string; resetBtn: string })} labels of the buttons used on the datePicker.
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
export type DatePickerProps = BaseDatePickerProps & {
  labels?: { title: string; submitBtn: string; resetBtn: string };
};
