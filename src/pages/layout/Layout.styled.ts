import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding-left: calc(50% - 550px);
    padding-right: calc(50% - 550px);
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
`;