import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: Record<number, string>;
      accent: Record<string, string>;
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      border: string;
    };
    spacing: Record<string | number, string> & number[];
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    zIndices: {
      base: number;
      modal: number;
      overlay: number;
      sticky: number;
    };
    transition: {
      fast: string;
      normal: string;
      slow: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontWeight: {
      normal: string;
      medium: string;
      bold: string;
    };
  }
} 