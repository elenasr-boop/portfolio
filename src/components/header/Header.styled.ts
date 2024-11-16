import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

export const ToggleThemeCont = styled.div`
  display: grid;
  place-items: center;
  /* min-height: 100svh; */
  margin: 0;
  transition: background-position .75s ease;
  background-position-y: ${({ theme }) => theme.toggleTheme};

  & #sunmoon {
    position: relative;
    width: 75px;
    aspect-ratio: 1;
    border-radius: 100%;
    overflow: hidden;
    filter: url("#blob");
  }
  & #sunmoon:before {
    content: "";
    position: absolute;
    top: ${({ theme }) => theme.sunmoonTop};
    left: ${({ theme }) => theme.sunmoonLeft};
    width: 172%;
    height: 172%;
    background: ${({ theme }) => theme.sunmoonBg};
    transition: .75s ease;
    -webkit-clip-path: url(#sunmoon_clip);
    clip-path: url(#sunmoon_clip);
  }
`;
