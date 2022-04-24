import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // primary: '#58BFF3';
    // secondary: '#A086FA';
    // success: '#A3E163';
    // warning: '#FEA94B';
    // error: '#F9708E';
    // white: '#ffffff';
    // black: '#2d2d2d';
    // gray: '#f0f0f0';

    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    primaryLight: string;
    secondaryLight: string;
    successLight: string;
    warningLight: string;
    errorLight: string;
    white: string;
    black: string;
    gray: string;
  }
}
