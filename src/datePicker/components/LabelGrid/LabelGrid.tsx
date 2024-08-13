import { useAppTheme } from "../../styles/theme";
import { LabelCell } from "../LabelCell";
import { useStyles } from "./style";
import { LabelGridProps } from "./type";

export const LabelGrid = ({ ...props }: LabelGridProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        {Array(12)
          .fill("")
          .map((_, index) => (
            <LabelCell
              key={index}
              onClick={() => props.onClick(index)}
              variant={props.getVariant(index)}
              value={props.list[index]}
              {...(props.isDateRange
                ? {
                    inRange: props.isInRange(index),
                  }
                : {})}
              rounded={props.getRounded(index)}
            />
          ))}
      </div>
    </div>
  );
};
