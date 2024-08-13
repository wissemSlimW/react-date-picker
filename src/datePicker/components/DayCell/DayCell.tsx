import { useAppTheme } from "../../styles/theme";
import { joinClassNames } from "../../utils";
import { useStyles } from "./style";
import { DayCellProps } from "./type";

export const DayCell = ({
  rounded = false,
  crossed = false,
  variant = "default",
  ...props
}: DayCellProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });

  return (
    <span
      className={joinClassNames(
        classes.container,
        props.inRange && classes.inRange,
        classes[variant],
        crossed && classes.crossed
      )}
      onClick={props.onClick}
    >
      <span
        className={joinClassNames(classes.background, classes[`${rounded}`])}
      ></span>
      <span
        className={joinClassNames(
          classes.layer,
          crossed === "end" && classes.crossedEnd,
          crossed === "start" && classes.crossedStart
        )}
      ></span>
      <span title={props.title || ""} className={classes.foreground}>
        {props.value}
      </span>
    </span>
  );
};
