
import { ContextType, IFormat } from "../interface/imageProps"
import { createContext, useState } from "react"

export const ImageContext = createContext<ContextType | null>(null)

export const ImageProvider:React.FC<React.ReactNode> = ( {children}) => {
    const [image, setImage] = useState<IFormat[]>([
        {   //Mockeo de la imagen
            src: "/assets/id_card.png",
            alt: "Id de prueba",
            status: true
        }
    ]);

    const saveImage = (images: IFormat) => {
        const newImage: IFormat =  {
            src: images.src,
            alt: images.alt,
            status: false
        };
        setImage([...image, newImage]);
    };

    return (
        <ImageContext.Provider value={{ image, saveImage}}>
            {children}
        </ImageContext.Provider>
    )
}