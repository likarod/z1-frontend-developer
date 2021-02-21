import { useContext } from 'react';
import {ImageContext} from '../context/ImageContext'
import { ContextType } from "../interface/imageProps";

import { CardStyle } from "../styles/Card/Card.style";
import IdCard from '../../src/assets/id_card.png'




export const Card:React.FC = () => {
    const {image}= useContext(ImageContext) as ContextType;
    // const ImagePath: string = images.src && IdCard

    return (
        <>  

            <CardStyle>
                 {/* Renderizar la última foto que haya en el CONTEXT este será el consumer */}
                <img
                src={IdCard}
                alt="Imagen de carga"
                />       
            </CardStyle>
             
           

        </>
    )
}