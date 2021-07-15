import { FooterArea, Wrapper, ContentWrapper, Content, Copywright } from './styles'
import logo from '../../images/logo-black.svg'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <FooterArea>
      <Wrapper>
        <img src={logo} alt="WON" />
        <ContentWrapper>
          <Content>
            <strong>Contato</strong>
            <p>suporte@wongames.gg</p>
            <p>+55 21 33283719</p>
          </Content>
          <Content>
            <strong>Nos acompanhe</strong>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </Content>
          <Content>
            <strong>Links</strong>
            <Link to="/loja">Loja</Link>
            <Link to="/explorar">Explorar</Link>
            <Link to="/buscar">Buscar</Link>
            <Link to="/faq">FAQ</Link>
          </Content>
          <Content>
            <strong>Localização</strong>
            <address>
              <p>Rua 7 de maio</p>
              <p>527 - 89020330</p>
              <p>Rio de Janeiro, Brasil</p>
            </address>
          </Content>
        </ContentWrapper>
      </Wrapper>
      <Copywright>Won Games {(new Date()).getFullYear()} © Todos os Direitos Reservados</Copywright>
    </FooterArea>
  )
}