import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingBlock: 15,
    borderStartStartRadius: 10,
    borderStartEndRadius: 10,
    border: `1px solid ${theme.colors.lightContent}`,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    paddingInline: 20,
    paddingBlockEnd: 10,
    paddingBlockStart: 5,
    borderBlockEnd: `1px solid ${theme.colors.lightContent}`,
  },
  title: {
    color: theme.colors.standard,
    fontFamily: theme.fontFamily,
    ...theme.fonts.xxl,
  },
  resetBtn: {
    cursor: "pointer",
    color: theme.colors.primary,
    fontFamily: theme.fontFamily,
    ...theme.fonts.md,
  },
  body: { flex: 1 },
  footer: { display: "flex", paddingInline: 15 },
  submitBtn: {
    cursor: "pointer",
    borderRadius: 10,
    flex: 1,
    padding: 10,
    textAlign: "center",
    background: theme.colors.primary,
    color: theme.colors.default,
    fontFamily: theme.fontFamily,
    ...theme.fonts.lg,
  },
}));
