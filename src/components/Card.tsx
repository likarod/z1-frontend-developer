// import { useState } from "react"
import React from "react";
import { IFormat } from "../interface/imageProps";

import { CardStyle } from "../styles/Card/Card.style";


export const Card = ({src , alt, status}:IFormat) => {
    // const [imageLoaded, setImageLoaded]= useState(false);

    return (
        <>  

            
                <CardStyle>
                        
                </CardStyle>
             
            {/* Renderizar la última foto que haya en el CONTEXT este será el consumer */}
            {/* {imgSrc && (
                <img
                src={src}
                alt={alt}
                />} */}

        </>
    )
}