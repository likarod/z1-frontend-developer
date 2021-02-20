import React, { useState } from "react"
import { Link } from "react-router-dom";

import { ButtonStyle } from "../styles/ButtonStyle.style"




export const Button = () => {
    const [text, setText] = useState<string>("Take Picture");
    const [error, setError] = useState<boolean>(false)


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
                <ButtonStyle onClick={changeName} value={text}>
                    {/* <Label>{text}</Label>
                    <Camera></Camera>    */}
                </ButtonStyle>
            </Link>
        </>
    )
}