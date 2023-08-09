import { styled } from "styled-components";

export const TaskCard = styled.div`
    width: 100%;
    padding: 10px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    background-color: var(--primary-color);
`

export const TaskTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 21px;
        font-weight: 600;
    }

    .t-dots { display: none; }
    svg { cursor: pointer; }
`

export const TaskMenu = styled.div`
    position: relative;
    display: flex;
    gap: 15px;

    ul {
        display: flex;
        align-items: center;
        gap: 15px;
    }
`

export const CheckBoxToDo = styled.div`

    input[type="checkbox"] { display: none; }

    label {
        content: '';
        width: 25px;
        height: 25px;
        border: 2px solid var(--tertiary-color);
        border-radius: 5px;

        display: inline-block;
        position: relative;

        cursor: pointer;
        transition: 0.25s;
    }

    input:checked + label {
        background-color: var(--tertiary-color);

        span {
            position: absolute;
            height: 3px;
            background-color: var(--primary-color);
            transition: 0.25s;
        }

        span:first-child {
            width: 15px;
            top: 9px;
            left: 5px;
            transform: rotate(-45deg);
        }
        span:last-child {
            width: 8px;
            top: 11.4px;
            left: 2.4px;
            transform: rotate(45deg);
        }
    }
`

export const TaskDiscription = styled.p`
    font-size: 16px;
    font-weight: 400;
`