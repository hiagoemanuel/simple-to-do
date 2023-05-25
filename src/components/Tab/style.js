import styled from "styled-components";

export const TabStyle = styled.article`
    width: 30vw;
    height: fit-content;
    border-radius: 15px;

    background-color: var(--secondary-color);
    box-shadow: 10px 10px 4px #00000025;
`

export const Title = styled.h1`
    width: 100%;
    border-radius: 15px 15px 0 0;
    
    text-align: center;
    
    font-size: 2.2rem;
    font-weight: bold;
    color: var(--primary-color);

    background-color: var(--tertiary-color);
`

export const TasksContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem 2%;
`

export const AddTask = styled.button`
    width: 100%;
    height: 7.5rem;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: var(--primary-color);

    div {
        width: 6rem;
        height: 6rem;
        padding: 0.5rem;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--tertiary-color);
    }

`