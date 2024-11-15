import 'styled-components';

declare module 'styled-components' {
  export type ThemeType = {
    background: string,
    text: string,
    headline: string,
    button: string,
    buttonHover: string,
    additionaly: string,
  }
}