import { Title } from "../styles/Info/Title.style"
import { InfoText } from "../styles/Info/InfoText.style"
import { Container } from "../styles/Container.style"


export const Info = () => {
    return(
        <Container>
            <Title>
                Scan your ID
            </Title>
            <InfoText>
                Take a picture. It may take time to validate your personal information.
            </InfoText>
        </Container>

    )
}