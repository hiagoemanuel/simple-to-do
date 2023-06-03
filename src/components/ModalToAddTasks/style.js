import styled from "styled-components";

export const Modal = styled.div`
    width: 100%;
    height: 100%;

    background-color: #00000075;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 10000;

    display: none;
    justify-content: center;
    align-items: center;
  
`

export const ModalContainer = styled.div`
    width: 50%;
    padding: 1rem;
    border-radius: 15px;

    background-color: var(--secondary-color);
`
export const ModalHeader = styled.div`
    width: 100%;
    margin-bottom: 1rem;

    display: flex;
    justify-content: space-between;

    button { font-size: 2.5rem; }
`

export const TextArea = styled.div`
    width: 100%;
    margin-bottom: 0.7rem; 

    display: flex;
    flex-direction: column;

    label {
        font-size: 2rem;
        font-weight: 600;
    }

    input {
        height: 3rem;
        padding: 1rem;
        border-radius: 10px;

        background-color: var(--primary-color);
    }
`

export const AddTask = styled.input`
    padding: 1rem;
    border-radius: 10px;

    font-size: 1.4rem;
    font-weight: 600;

    cursor: pointer;
    background-color: var(--tertiary-color);
    color: var(--primary-color)
`