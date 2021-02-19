import React, { useState } from "react"

import {Camera} from './Camera'
import { ButtonStyle, Label } from "../styles/ButtonStyle.style"


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
            <ButtonStyle onClick={changeName}>
                <Label>{text}</Label>
                <Camera></Camera>   
            </ButtonStyle>
             
        </>
    )
}