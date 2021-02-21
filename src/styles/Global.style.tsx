import {createGlobalStyle} from 'styled-components';

import { mediaQueries } from './media/mediaQueries';



export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0 auto;
        padding: 1rem;
        max-width: 23.5rem;
        height: 41.68rem;
        font-family: Roboto;
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.color};
        transition: all 0.50s linear;
        
        ${mediaQueries("lg")`
            display: flex;
            flex-direction: column;
            max-width: 109rem;
            height: 95vh;
        `}
    }
`