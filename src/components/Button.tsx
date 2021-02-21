import React, { useState } from "react"
import { Link } from "react-router-dom";

import { ButtonStyle } from "../styles/ButtonStyle.style"


interface Itoogle {
    theme:string
    toggleTheme: any
}

export const Button:React.FC<Itoogle> = ({theme, toggleTheme}) => {
    const [text, setText] = useState<string>("Take Picture");
    const [error, setError] = useState<boolean>(false)
    const isPrimary = theme === "primary";




    const changeName = () =>  {
      if(!error) {
          setText("Remake Picture")
          setError(true)
      } else {
          setText("Take Picture")
          setError(false)
      }
    } 
    

    return(
        <>  
            <Link to="/camara"> 
                <ButtonStyle {...isPrimary} onClick={toggleTheme} onChange= {changeName}value={text}>
                    {/* <Label>{text}</Label>
                    <Camera></Camera>    */}
                </ButtonStyle>
            </Link>
        </>
    )
}