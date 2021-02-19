import { Info } from "./Info"
import { Button } from "./Button"

//Styles
import { Bank } from "../styles/Main/Bank.style"
import { Content } from "../styles/Main/Content.style"
import { Container } from "../styles/Container.style"
import { Line } from "../styles/Main/Line.style"
import { CardStyle } from "../styles/Card/Card.style"






export const Main = () => {
    return (
        <> 
            <Content>
                <div>
                    <Bank>BankClient</Bank>
                </div>
                <Line/>
                <article>
                    <Info/>
                    <Container>
                        <CardStyle>
                            <Button/>
                        </CardStyle>
                    </Container> 
                </article>
            </Content>
        </>
    )
}
