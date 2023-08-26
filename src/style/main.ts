import styled from "styled-components";

export const MainContainer = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TaskListContainer = styled.div`
    padding: 40px;

    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 390px));
    grid-auto-rows: min-content;
    gap: 30px;

    justify-content: start;
`

export const Footer = styled.footer`
    width: 100%;
    padding: 5px;

    text-align: center;
    
    a { color: var(--tertiary-color); }    
`