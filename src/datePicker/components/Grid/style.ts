import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    // width: 294,
    gap: 15,
  },
  header: { display: "flex" },
  dayName: {
    width: 42,
    textAlign: "center",
    fontFamily: theme.fontFamily,
    color: theme.colors.standard,
    backgroundColor: theme.colors.default,
    ...theme.fonts.md,
  },
  body: { display: "flex", flexWrap: "wrap", rowGap: 15 },
}));
