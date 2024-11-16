import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
`;

export const ThemeButton = styled.button`
    width: 140px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: 1px solid ${({ theme }) => theme.buttonBackground};
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: ${({ theme }) => theme.boxShadow};

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBackground};
    color: #ffffff;
    box-shadow: ${({ theme }) => theme.buttonHoverBoxShadow};
  }

  &:active {
    background-color: ${({ theme }) => theme.buttonActiveBackground};
    color: ${({ theme }) => theme.buttonText};
    box-shadow: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.buttonDisabledBackground};
    color: ${({ theme }) => theme.buttonDisabledText};
    box-shadow: none;
    cursor: not-allowed;
  }
`;
