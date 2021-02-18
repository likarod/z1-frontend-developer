import styled from 'styled-components';
import { mediaQueries } from './media/mediaQueries';


export const Content = styled.section`
    margin: 0 auto;
    padding: 1rem;
    max-width: 23.43rem;
    font-family: Roboto;
    background-color: #ffffff;
    height: 41.68rem;
    ${mediaQueries("lg")`
        display: flex;
        flex-direction: column;
        // justify-content: center;
        // align-items: center;
        max-width: 71.1rem;
    `}
`