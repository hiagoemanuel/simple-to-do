import { styled } from "styled-components";

export const ListContainer = styled.div`
    max-width: 390px;
    height: fit-content;
    border-radius: 10px;

    background-color: var(--secondary-color);
    box-shadow: 10px 10px 4px #00000045;
`

export const ListTitle = styled.div`
    width: 100%;
    border-radius: 10px 10px 0 0;
    
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: var(--tertiary-color);
    
    h1 {
        font-size: 24px;
        font-weight: 700;
        color: var(--primary-color);
    }

    div {
        position: absolute;
        right: 10px;

        display: flex;
        align-items: center;
        
        svg > * { fill: var(--primary-color); }
        cursor: pointer;
    }
`

export const TasksContainer = styled.div`
    width: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;
`