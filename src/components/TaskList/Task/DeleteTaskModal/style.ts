import { styled } from "styled-components";

export const DeleteTask = styled.div`
    display: flex;
    gap: 10px;

    input {
        padding: 5px 10px;
        border-radius: 5px;

        font-size: 20px;
        font-weight: 600;
        
        background-color: var(--tertiary-color);
        color: var(--primary-color);
        cursor: pointer;
    }
`