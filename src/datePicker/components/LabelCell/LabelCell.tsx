import { useAppTheme } from "../../styles/theme";
import { joinClassNames } from "../../utils";
import { useStyles } from "./style";
import { LabelCellProps } from "./type";

export const LabelCell = ({
  rounded = false,
  variant = "default",
  ...props
}: LabelCellProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });

  return (
    <span
      className={joinClassNames(
        classes.container,
        props.inRange && classes.inRange,
        classes[variant]
      )}
      onClick={props.onClick}
    >
      <span
        className={joinClassNames(classes.background, classes[`${rounded}`])}
      ></span>
      <span className={classes.foreground}>{props.value}</span>
    </span>
  );
};
