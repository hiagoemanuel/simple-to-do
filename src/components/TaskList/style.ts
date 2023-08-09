import { styled } from "styled-components";

export const ListContainer = styled.div`
    max-width: 390px;
    height: fit-content;
    border-radius: 10px;

    background-color: var(--secondary-color);
`

export const ListTitle = styled.h1`
    border-radius: 10px 10px 0 0;
    text-align: center;

    background-color: var(--tertiary-color);
    color: var(--primary-color);
    font-size: 22px;
    font-weight: 700;
`

export const TasksContainer = styled.div`
    width: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;
`