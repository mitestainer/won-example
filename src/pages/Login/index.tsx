import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Wrapper, Banner, TextWrapper, LoginArea, LoginForm } from './styles'
import LogoWhite from '../../images/logo-white.svg'
import LogoBlack from '../../images/logo-black.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const history = useHistory()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // handle login
    history.push('/loja')
  }

  return (
    <Wrapper>
      <Banner>
        <img src={LogoWhite} alt="Won Logo" />
        <TextWrapper>
          <p>Seus jogos favoritos em um só lugar</p>
          <p>A <span>WON</span> é a melhor e mais completa plataforma de games.</p>
        </TextWrapper>
        <p>Won Games {(new Date()).getFullYear()} © Todos os Direitos Reservados</p>
      </Banner>
      <LoginArea>
        <img src={LogoBlack} alt="Won Logo" />
        <LoginForm onSubmit={handleSubmit}>
          <p>Entrar</p>
          <Input type="email" placeholder="Email" onChange={e => setCredentials({ ...credentials, email: e.target.value })} />
          <Input type="password" placeholder="Senha" onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
          <Link to="/recuperar">Esqueceu sua senha?</Link>
          <Button>Entrar</Button>
          <p>Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
        </LoginForm>
      </LoginArea>
    </Wrapper>
  )
}