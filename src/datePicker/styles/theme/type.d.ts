type ColorNames =
  | "primary"
  | "lightPrimary"
  | "secondary"
  | "lighSecondary"
  | "standard"
  | "content"
  | "lightContent"
  | "default";
type Colors = Record<ColorNames, string>;
type FontType = "sm" | "md" | "lg" | "xl" | "xxl";
type Font = {
  fontWeight: number | string;
  fontSize: number | string;
};
interface Theme {
  fontFamily: string;
  fonts: Record<FontType, Font>;
  colors: Colors;
}
