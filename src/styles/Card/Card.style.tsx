import styled from "styled-components";
import IdCard from '../../assets/Id/id_bg.svg'

export const CardStyle = styled.div`
    display:flex;
    align-items: center;
    height: 10rem;
    width: 16.25rem;
    margin: 1.68rem;
    border-radius: 0.72rem;
    background-color: #FFFFFF;
    background-image: url(${IdCard});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 13.56rem  7.75rem;
    box-shadow: 0 0.62rem 1.25rem -0.37rem rgba(0,0,0,0.15);
`

//public\assets\Id\id_bg.svg