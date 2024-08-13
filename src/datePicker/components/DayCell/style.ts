import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    position: "relative",
    backgroundColor: theme.colors.default,
  },
  background: {
    width: 38,
    height: 34,
  },
  layer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 2,
    inset: 0,
  },
  foreground: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 4,
    insetBlock: 0,
    insetInline: 4,
    borderRadius: 16,
    width: 32,
    height: 32,
    fontFamily: theme.fontFamily,
    ...theme.fonts.sm,
  },
  default: {
    "&>:first-child": {
      backgroundColor: "transparent",
    },
    "&&>:last-child": {
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
  // TODO style the highlighted variant
  highlighted: {
    "&>:first-child": {
      backgroundColor: "transparent",
    },
    "&&&&>:last-child": {
      color: theme.colors.lightPrimary,
      backgroundColor: "transparent",
      border: `1px solid ${theme.colors.lightPrimary}`,
      ...theme.fonts.md,
    },
  },
  inRange: {
    "&&&>:first-child": {
      backgroundColor: theme.colors.lighSecondary,
    },
    "&&&>:last-child": {
      border: `1px solid transparent`,
      color: theme.colors.primary,
      ...theme.fonts.md,
    },
  },
  crossed: {
    "&&& $layer": {
      backgroundColor: theme.colors.lightPrimary,
    },
    "&&& >:last-child": {
      backgroundColor: "transparent",
      border: `1px solid transparent`,
      color: theme.colors.default,
    },
  },
  crossedEnd: {
    borderStartEndRadius: 10,
    borderEndEndRadius: 10,
  },
  crossedStart: {
    borderStartStartRadius: 10,
    borderEndStartRadius: 10,
  },
  start: {
    borderStartStartRadius: 16,
    borderEndStartRadius: 16,
    marginInlineStart: 4,
    width: 34,
  },
  end: {
    borderStartEndRadius: 16,
    borderEndEndRadius: 16,
    marginInlineEnd: 1,
    width: 37,
  },
  true: {
    borderRadius: 16,
    marginInline: 4,
    width: 32,
  },
  false: {
    borderRadius: 0,
  },
}));
