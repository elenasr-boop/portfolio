import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './components/theme/theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

export default GlobalStyle;