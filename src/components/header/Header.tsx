import { Navigation } from "../navigation/Navigation";
import { HeaderContainer, ToggleThemeCont } from "./Header.styled";

export function Header({ toggleTheme }: { toggleTheme: () => void }) {
  return (
    <HeaderContainer>
      <Navigation />
      <ToggleThemeCont onClick={() => toggleTheme()}>
        <svg height="0" width="0" >
          <defs>
            <clipPath id="sunmoon_clip" clipPathUnits="objectBoundingBox">
              <path d="M.29 0A.29.29 0 1 1 0 .29V1h1V0H.29z"></path>
            </clipPath>
          </defs>
          <defs>
            <filter id="blob">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -12"
                result="blob"
              ></feColorMatrix>
            </filter>
          </defs>
        </svg>
        <div id="sunmoon"></div>
      </ToggleThemeCont>
    </HeaderContainer>
  );
}
