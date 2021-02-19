import styled from 'styled-components';
import { mediaQueries } from '../media/mediaQueries';

export const Line = styled.div`
    box-sizing: border-box;
    height: 0.06px;
    max-width: 23.5rem;
    border: 1px solid rgba(47,0,121,0.1);
    ${mediaQueries("lg")`
    max-width: 109rem;
`}
`
