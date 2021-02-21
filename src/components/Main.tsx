import { Info } from "./Info"
import { Card } from "./Card"
import { Cam } from "./Cam"

//Styles
import {ThemeProvider } from 'styled-components';
import {primaryTheme, secundaryTheme} from '../styles/theme.style'
import { GlobalStyles } from "../styles/Global.style"


import { Bank } from "../styles/Main/Bank.style"
import { Line } from "../styles/Main/Line.style"
import { ImageProvider } from "../context/ImageContext"
import { useState } from "react";
import { Button } from "./Button";
import { Container } from "../styles/Container.style";

{/*
  Idea: Realizar a través de Link to para rendizar distintas vistas:
  /home - Card + state de context de main de la imagen que guarde
  if ( status: not Ok ) {
      button 
  } else button -> Remake picture. -> link to
  /cam - Captura la imagen en cada vista 

*/}

export const Main:React.FC = () => {
    const [theme, setTheme] = useState('primary');
    const themeMode = theme === "primary" ? primaryTheme : secundaryTheme;
    const toggleTheme = () => {
        theme === "primary" ? setTheme("secundary") : setTheme("primary")
    }

    return (
        <ThemeProvider theme={themeMode} >
            <>                 
                <GlobalStyles/>
                <ImageProvider>
                        <div>
                            <Bank>BankClient</Bank>
                        </div>
                        <Line/>            
                        <article>
                            <Info/>
                            <Container>                
                                <Card src="hola" alt="prueba" status={false} /> 
                                <Button theme={theme} toggleTheme={toggleTheme}></Button>                  

                            </Container> 
                            
                            {/* <Cam/> */}
                        </article>
                </ImageProvider>
            </>
        </ThemeProvider>
    )
}
