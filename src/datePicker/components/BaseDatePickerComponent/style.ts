import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    width: 272,
    padding: 15,
  },
  dateRangeContainer: {
    fontFamily: theme.fontFamily,
    color: theme.colors.content,
    ...theme.fonts.md,
    display: "flex",
    justifyContent: "center",
    gap: 20,
  },
  dateRangeBtn: {
    textAlign: "center",
    flex: 1,
    cursor: "pointer",
  },
}));
