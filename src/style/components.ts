import styled from 'styled-components'

export const ModalSection = styled.section<{ $isOpen: boolean }>`
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;

    display: ${props => props.$isOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    background-color: #00000050;
`

export const ModalContainer = styled.div`
    width: 500px;
    margin: 10px;

    padding: 10px;
    border-radius: 10px;

    background-color: var(--secondary-color);
`

export const ModalHeader = styled.div`
    margin-bottom: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 20px;
        font-weight: 700;
    }
`

export const CloseButton = styled.div`
    width: 20px;
    height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: rotate(45deg);
    cursor: pointer;

    span {
        width: 20px;
        height: 3px;
        border-radius: 5px;

        position: absolute;

        background-color: var(--primary-color);

        &:first-child { transform: rotate(90deg) }
    }
`

export const ModalInput = styled.form`
    input[type='text'] {
        width: 100%;
        padding: 5px;
        border-radius: 5px;
        margin-bottom: 10px;

        font-size: 16px;
        font-weight: 400;

        background-color: var(--primary-color);
    }

    input[type='submit'] {
        padding: 5px 10px;
        border-radius: 5px;

        font-size: 16px;
        font-weight: 600;

        background-color: var(--tertiary-color);
        color: var(--primary-color);
        cursor: pointer;
    }
`