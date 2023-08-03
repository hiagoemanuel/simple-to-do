import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 390px;
    height: 95px;
    padding: 10px;
    border-radius: 10px;

    background-color: var(--secondary-color);
`

export const Button = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: var(--primary-color);
    cursor: pointer;
`

export const PlusButton = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--tertiary-color);

    span {
        width: 40px;
        height: 5px;
        border-radius: 5px;

        position: absolute;

        background-color: var(--primary-color);

        &:first-child { transform: rotate(90deg) }
    }
`