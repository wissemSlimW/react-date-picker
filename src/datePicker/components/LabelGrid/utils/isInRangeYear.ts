
export const isInRangeYear = (props: {
  value: number;
  start: Date;
  end: Date;
}) => {
  if (
    props.end &&
    props.start &&
    props.value === props.start.getFullYear() &&
    props.value === props.end.getFullYear()
  )
    return false;
  if (props.end && props.start)
    return (
      props.value <= props.end.getFullYear() &&
      props.value >= props.start.getFullYear()
    );
  return false;
};
