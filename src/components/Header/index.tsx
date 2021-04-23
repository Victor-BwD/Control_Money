import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./style"

export function Header(){
    return(
        <Container>
            <Content>
            <img src={logoImg} alt="dt_money"/>
            <button type="button">
                Nova transação
            </button>
            </Content>
        </Container>
    )
}