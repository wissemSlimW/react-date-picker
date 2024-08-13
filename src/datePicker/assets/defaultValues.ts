import { DatePickerProps } from "../components";
import {
  DayNames,
  MonthNames,
  View,
} from "../components/BaseDatePickerComponent/type";

export const DEFAULT_DAYS_NAME: DayNames = {
  "0": "Su",
  "1": "Mo",
  "2": "Tu",
  "3": "We",
  "4": "Th",
  "5": "Fr",
  "6": "Sa",
};
export const MONTH_NAMES: MonthNames = {
  "0": "Jan",
  "1": "Feb",
  "2": "Mar",
  "3": "Apr",
  "4": "Mai",
  "5": "Jun",
  "6": "Jul",
  "7": "Aug",
  "8": "Sep",
  "9": "Oct",
  "10": "Nov",
  "11": "Dec",
};
export const DEFAULT_VIEWS: View[] = ["day", "month", "year"];
export const MODES: Record<View, View[]> = {
  day: DEFAULT_VIEWS,
  month: ["month", "year"],
  year: ["year"],
};
export const LABELS = {
  resetBtn: "Reset",
  submitBtn: "Apply",
  title: "Calendar",
};
