import { useState } from "react"

import { Itoogle } from "../interface/Toogle";
import { ButtonStyle } from "../styles/ButtonStyle.style"




export const Button:React.FC<Itoogle> = ({theme, toggleTheme}) => {
    const [text, setText] = useState<string>("Take Picture");
    const [error, setError] = useState<boolean>(false)
    const isPrimary = theme === "primary";

    const changeName = () =>  {
        console.log("CAMBIIOOOOOOOOO")
        if(error) {
            setText("Remake Picture")
            setError(true)
        } else {
            setText("Take Picture")
            setError(false)
        }
  
    }

    // useEffect (() => {
    //     changeName()
    // }, [])
    

    return(
        <>  
            <ButtonStyle {...isPrimary} onClick={toggleTheme}>
            </ButtonStyle>
        </>
    )
}