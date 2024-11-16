import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 70px;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.link};
  text-underline-offset: 4px;
  position: relative;

  &:hover::before {
    clip: rect(0, 70px, 70px, 0);
  }

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    content: attr(data-content);
    display: inline-block;
    color: ${({ theme }) => theme.buttonBackground};
    /* color: #fff; */
    width: 100%;
    clip: rect(0, 0, 70px, 0);
    -webkit-transition: clip cubic-bezier(0.25, 0.46, 0.45, 0.94) 500ms;
    transition: clip cubic-bezier(0.25, 0.46, 0.45, 0.94) 500ms;
  }
`;
