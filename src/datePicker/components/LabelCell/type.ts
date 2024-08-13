type Variant = "default" | "selected" | "bordered" | "disabled";
type Form = boolean | "start" | "end";
export type LabelCellProps = {
  value: string | React.ReactElement;
  onClick: () => void;
  variant?: Variant;
  rounded?: Form;
  crossed?: Form;
  inRange?: boolean;
};
