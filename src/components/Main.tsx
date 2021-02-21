import { useState, useCallback } from "react";
import { ImageProvider } from "../context/ImageContext"

//Components
import { Info } from "./Info"
import { Card } from "./Card"
import { Button } from "./Button";

//Styles
import {ThemeProvider } from 'styled-components';
import {primaryTheme, secundaryTheme} from '../styles/theme.style'
import { GlobalStyles } from "../styles/Global.style"
import { Bank } from "../styles/Main/Bank.style"
import { Line } from "../styles/Main/Line.style"
import { Container } from "../styles/Container.style";





export const Main:React.FC = () => {
    const [theme, setTheme] = useState('primary');
    const themeMode = theme === "primary" ? primaryTheme : secundaryTheme;



    const toggleTheme = useCallback(() => {
        theme === "primary" ? setTheme("secundary") : setTheme("primary")
    }, [theme])


    return (
        <ThemeProvider theme={themeMode} >
            <>   
                <GlobalStyles/>
                    <ImageProvider>
                        <div>
                            <Bank>BankClient</Bank>
                        </div>
                        <Line/>            
                        <Info theme={theme}/>
                        <Container>                
                            <Card/>  
                        </Container> 
                    </ImageProvider>
                {/*
                    Idea: Realizar a través de Link to para rendizar distintas vistas:
                    /home - Card + state de context de main de la imagen que guarde
                    if ( status: not Ok ) {
                        button 
                    } else button -> Remake picture. -> link to
                    /cam - Captura la imagen en cada vista 

                    */}
            </>
        </ThemeProvider>
    )
}
