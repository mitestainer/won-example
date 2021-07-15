import { FC } from 'react'
import { Wrapper, CardInfo, Tag } from './styles'

type CardProps = {
  data: {
    image: string
    name: string
    publisher: string
    price: number
    discount?: number
  }
}

export const Card: FC<CardProps> = ({ data }) => {
  const { image, name, publisher, price, discount } = data
  return (
    <Wrapper>
      {discount && <Tag>{discount}% off</Tag>}
      <img src={image} alt={name} />
      <CardInfo>
        <p>{name}</p>
        <p>{publisher}</p>
        <span>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
      </CardInfo>
    </Wrapper>
  )
}