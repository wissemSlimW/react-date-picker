import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    position: "relative",
    backgroundColor: theme.colors.default,
    gap: 15,
  },
  background: {
    flex: 1,
    minWidth: 84,
    height: 34,
  },
  foreground: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 4,
    insetBlock: 0,
    // insetInline: 4,
    borderRadius: 20,
    width: 84,
    height: 34,
    fontFamily: theme.fontFamily,
    ...theme.fonts.md,
  },
  default: {
    "&>:first-child": {
      backgroundColor: "transparent",
    },
    "&&&>:last-child": {
      border: `1px solid transparent`,
      color: theme.colors.standard,
    },
  },
  selected: {
    "&>:first-child": {
      backgroundColor: "transparent",
    },
    "&&&&>:last-child": {
      color: theme.colors.default,
      backgroundColor: theme.colors.primary,
      border: `1px solid ${theme.colors.primary}`,
      ...theme.fonts.md,
    },
  },
  disabled: {
    "&>:first-child": {
      backgroundColor: "transparent",
    },
    "&&&>:last-child": {
      color: theme.colors.content,
      backgroundColor: theme.colors.default,
      border: `1px solid ${theme.colors.default}`,
      opacity: 0.5,
    },
  },
  bordered: {
    "&>:first-child": {
      backgroundColor: "transparent",
    },
    "&&&&>:last-child": {
      color: theme.colors.primary,
      backgroundColor: theme.colors.lighSecondary,
      border: `1px solid ${theme.colors.primary}`,
      ...theme.fonts.md,
    },
  },
  inRange: {
    "&&&>:first-child": {
      backgroundColor: theme.colors.lighSecondary,
    },
    "&>:last-child": {
      border: `1px solid transparent`,
      color: theme.colors.primary,
      ...theme.fonts.md,
    },
  },
  start: {
    borderStartStartRadius: 20,
    borderEndStartRadius: 20,
    // marginInlineStart: 4,
    width: 34,
  },
  end: {
    borderStartEndRadius: 20,
    borderEndEndRadius: 20,
    // marginInlineEnd: 1,
    width: 37,
  },
  true: {
    borderRadius: 20,
    // marginInline: 4,
    width: 84,
  },
  false: {
    borderRadius: 0,
  },
}));
