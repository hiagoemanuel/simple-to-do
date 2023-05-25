import styled from "styled-components";

export const Task = styled.div`
    width: 100%;
    height: fit-content;
    padding: 1rem;
    border-radius: 10px;

    margin-bottom: 10px;

    background-color: var(--primary-color);
`

export const TaskHeader = styled.div`
    width: 100%;
    margin-bottom: 1rem;

    display: flex;
    justify-content: space-between;

    h1 {
        font-size: 2.1rem;
        font-weight: 600;
    }
`

export const TaskMenu = styled.div`
    display: flex;
    gap: 1.5rem;

    input[type='checkbox'] {
        width: 2.5rem;
        height: 2.5rem;
        border: 2px solid var(--tertiary-color);
        border-radius: 5px;
        
        appearance: none;
        cursor: pointer;
    }

    input[type='checkbox']:checked {        
        padding-bottom: 5px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--tertiary-color);

        &:after {
            content: "";
            width: 1rem;
            height: 1.5rem;
            border: 0.3rem solid var(--primary-color);
            border-width: 0 0.3rem 0.3rem 0;

            transform: rotate(40deg);
        }
    }
`

export const Discription = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
`