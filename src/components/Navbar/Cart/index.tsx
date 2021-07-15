import { FC } from 'react'
import { Wrapper, AmountCircle } from './styles'
import IconCart from '../../../images/icon-cart.svg'

type CartProps = {
  amount: number
}

export const Cart: FC<CartProps> = ({ amount }) => {
  return (
    <Wrapper>
      {amount > 0 && <AmountCircle>{amount}</AmountCircle>}
      <img src={IconCart} alt="" />
    </Wrapper>
  )
}