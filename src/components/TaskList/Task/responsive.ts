import { createGlobalStyle } from "styled-components";
import { TaskMenu } from "./style";

export const Responsive = createGlobalStyle<{ $menuIsOpen: boolean }>`
    @media (max-width: 470px) {
        .t-dots { display: block !important; }
        ${TaskMenu} {
            gap: 10px;
            ul { display: none; }

            ${props => props.$menuIsOpen ? 'ul' : ''} {
                padding: 5px;
                border-radius: 4px;

                display: flex !important;
                z-index: 10;

                position: absolute;
                top: 27px;
                left: -25px;

                background-color: var(--secondary-color);
            }
        }

        
    }
`