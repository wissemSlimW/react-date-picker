import { useState } from "react";
import { LABELS } from "../../assets";
import { useAppTheme } from "../../styles/theme";
import { BaseDatePickerComponent } from "../BaseDatePickerComponent";
import { useStyles } from "./style";
import { DatePickerProps } from "./type";

export const DatePickerComponent = ({
  labels = LABELS,
  ...props
}: DatePickerProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const [oldValue, setOldValue] = useState(props.value);
  const [value, setValue] = useState(props.value);

  return (
    <div className={classes.container}>
      <span className={classes.header}>
        <span className={classes.title}>{labels.title}</span>
        <span
          className={classes.resetBtn}
          onClick={() => {
            props.onChange(oldValue || (props.value as any));
            setValue(oldValue || (props.value as any));
          }}
        >
          {labels.resetBtn}
        </span>
      </span>
      <span className={classes.body}>
        <BaseDatePickerComponent
          {...props}
          onChange={setValue}
          value={value || (props.value as any)}
        />
      </span>
      <span className={classes.footer}>
        <span
          className={classes.submitBtn}
          onClick={() => {
            props.onChange(value as any);
            setOldValue(value);
          }}
        >
          {labels.submitBtn}
        </span>
      </span>
    </div>
  );
};
