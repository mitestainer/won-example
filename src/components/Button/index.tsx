import { FC, ReactNode } from 'react'
import { ButtonComponent } from './styles'

type ButtonProps = {
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({ children }) => <ButtonComponent>{children}</ButtonComponent>