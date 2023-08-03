import styled from "styled-components";

export const MainContainer = styled.main`
    width: 100vw;
    height: 100vh;
    padding: 40px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 390px));
    grid-auto-rows: min-content;
    gap: 30px;

    justify-content: start;

    background-color: var(--primary-color);
`