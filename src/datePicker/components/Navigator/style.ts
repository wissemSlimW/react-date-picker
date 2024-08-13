import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    paddingInline: 10,
  },
  navigationLabel: {
    cursor: "pointer",
    fontFamily: theme.fontFamily,
    display: "flex",
    gap: 10,
    color: theme.colors.standard,
    ...theme.fonts.xl,
  },
  navigationBtns: { display: "flex", gap: 10 },
  navigationBtn: {
    cursor: "pointer",
    color: theme.colors.content,
  },
}));
