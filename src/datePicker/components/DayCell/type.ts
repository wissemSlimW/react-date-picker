type Variant = "default" | "selected" | "disabled" | "bordered" | "highlighted";
type Form = boolean | "start" | "end";
export type DayCellProps = {
  title?: string;
  value: string;
  onClick: () => void;
  variant?: Variant;
  rounded?: Form;
  crossed?: Form;
  inRange?: boolean;
};
