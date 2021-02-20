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









export const Main = () => {

    return (
        <ThemeProvider theme={secundaryTheme} >
            <>                 
                <GlobalStyles/>
                <ImageProvider>
                        <div>
                            <Bank>BankClient</Bank>
                        </div>
                        <Line/>            
                        <article>
                            <Info/> 
                            <Cam/>
                            <Card src="hola" alt="prueba" status={false} /> 
                        </article>
                </ImageProvider>
            </>
        </ThemeProvider>
    )
}
