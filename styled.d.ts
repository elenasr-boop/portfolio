import "styled-components";

declare module "styled-components" {
  export type ThemeType = {
    background: string;
    text: string;
    headline: string;
    additionaly: string;
    link: string;
    linkHover: string;
    linkActive: string;
    buttonBackground: string;
    buttonText: string;
    buttonHoverBackground: string;
    buttonActiveBackground: string;
    buttonDisabledBackground: string;
    buttonDisabledText: string;
    boxShadow: string;
    hoverBoxShadow: string;
  };
}
