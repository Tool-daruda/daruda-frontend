import "@emotion/react";
import { ColorType, FontType } from "./theme";

declare module "@emotion/react" {
  export interface Theme {
    colors: ColorType;
    fonts: FontType;
  }
}