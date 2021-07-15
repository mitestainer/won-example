import { NavLink } from 'react-router-dom'
import { Wrapper, Links } from './styles'
import { Cart } from './Cart'
import LogoWhite from '../../images/logo-white.svg'
import { Profile } from './Profile'

export const Navbar = () => {
  return (
    <Wrapper>
      <NavLink to="/">
        <img src={LogoWhite} alt="WON" />
      </NavLink>
      <Links>
        <NavLink to="/loja" activeClassName="active">Loja</NavLink>
        <NavLink to="/explorar" activeClassName="active">Explorar</NavLink>
      </Links>
      <Cart amount={12} />
      <Profile />
    </Wrapper>
  )
}