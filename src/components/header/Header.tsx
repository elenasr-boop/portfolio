import { Navigation } from "../navigation/Navigation";
import { HeaderContainer, ThemeButton } from "./Header.styled";

export function Header({ toggleTheme }: { toggleTheme: () => void }) {
  return (
    <HeaderContainer>
      <Navigation />
      <ThemeButton onClick={() => toggleTheme()}>Toggle Theme</ThemeButton>
    </HeaderContainer>
  );
}
