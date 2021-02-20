import { Info } from "./Info"
import { Card } from "./Card"
//Styles
import { Bank } from "../styles/Main/Bank.style"
import { Content } from "../styles/Main/Content.style"
import { Line } from "../styles/Main/Line.style"
import { ImageProvider } from "../context/ImageContext"








export const Main = () => {

    return (
        <> 
        <ImageProvider>
            <Content>
                <div>
                    <Bank>BankClient</Bank>
                </div>
                <Line/>
                <article>
                    <Info/> 
                    <Card src="hola" alt="prueba" status={false} /> 
                </article>
            </Content>
        </ImageProvider>
        </>
    )
}
