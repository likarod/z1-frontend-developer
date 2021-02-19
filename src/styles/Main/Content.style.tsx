import styled from 'styled-components';
import { mediaQueries } from '../media/mediaQueries';


export const Content = styled.section`
    margin: 0 auto;
    padding: 1rem;
    max-width: 23.5rem;
    font-family: Roboto;
    background-color: #ffffff;
    height: 41.68rem;
    ${mediaQueries("lg")`
        display: flex;
        flex-direction: column;
        max-width: 109rem;
        height: 95vh;
    `}
`