import {
  BaseDatePickerProps,
  DateActionProps,
  Month,
  RangedDateActionProps,
  Year,
} from "../BaseDatePickerComponent/type";
import { LabelCellProps } from "../LabelCell/type";

export type LabelGridProps = Pick<BaseDatePickerProps, "isDateRange"> & {
  onClick: (index: number) => void;
  list: Record<string, string>;
  getVariant: (index: number) => LabelCellProps["variant"];
  isInRange: (index: number) => LabelCellProps["inRange"];
  getRounded: (index: number) => LabelCellProps["rounded"];
};
export type LabelGridLayoutProps = Pick<
  LabelGridProps,
  "list" | "onClick" | "isDateRange"
> &
  Pick<BaseDatePickerProps, "maxDate" | "minDate"> & {
    type: Month | Year;
    currentDate?: DateActionProps["value"];
    currentRange?: RangedDateActionProps["value"];
    dateOnDisplay: Date;
  };
