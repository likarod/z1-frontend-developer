import { useState } from "react"
import { Link } from "react-router-dom";
import { Itoogle } from "../interface/Toogle";

import { ButtonStyle, ValueStyle } from "../styles/ButtonStyle.style"
import { Container } from "../styles/Container.style";




export const Button:React.FC<Itoogle> = ({theme, toggleTheme}) => {
    const [text] = useState<string>("Take Picture");
    const isPrimary = theme === "primary";

    return(
        <>  
            <Container>
                <ButtonStyle {...isPrimary} onClick={toggleTheme}>
                        <Link to="/:cam">
                            <ValueStyle>{text}</ValueStyle>
                        </Link>
                </ButtonStyle>
            </Container>
        </>
    )
}