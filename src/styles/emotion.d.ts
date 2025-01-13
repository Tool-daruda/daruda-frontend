import '@emotion/react';
import { ColorType, FontType, UtilityType } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorType;
    fonts: FontType;
    utilities: UtilityType;
  }
}
