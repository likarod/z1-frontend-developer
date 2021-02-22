import { useContext } from 'react';
import {ImageContext} from '../context/ImageContext'
import { ContextType } from "../interface/imageProps";

import { CardStyle } from "../styles/Card/Card.style";
import  IdCard  from '../assets/Id/id_bg.svg'
import Info  from './Info';




export const Card:React.FC = () => {
    const {image}= useContext(ImageContext) as ContextType;
    const ImagePath: string = image[0].src 

    return (
        <> 
            <Info></Info>
            <CardStyle>
                <img
                src={ImagePath && IdCard}
                alt="Imagen de mockeada"
                />       
            </CardStyle>
        </>
    )
}