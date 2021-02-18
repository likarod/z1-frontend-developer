import { Card } from "./Card"

import { Bank } from "../styles/Bank.style"
import { Content } from "../styles/Content.style"
import { Line } from "../styles/Line.style"
import {Title} from "../styles/Title.style"


export const Main = () => {
    return (
        <> 
            <Content>
                <div>
                    <Bank>BankClient</Bank>
                </div>
                <Line/>
                <article>
                    <div>
                        <Title>
                            Scan your ID
                        </Title>
                        Take a picture. It may take time to validate your personal information.
                    </div>
                    <div>
                        <Card/>
                    </div>  
                </article>
                
            </Content>
        </>
    )
}
