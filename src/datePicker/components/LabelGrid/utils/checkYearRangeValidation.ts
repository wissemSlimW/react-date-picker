export const checkYearRangeValidation = (props: {
  value: number;
  max: Date | undefined;
  min: Date | undefined;
}): boolean => {
  if (props.max && props.value > props.max.getFullYear()) return false;
  if (props.min && props.value < props.min.getFullYear()) return false;
  return true;
};
