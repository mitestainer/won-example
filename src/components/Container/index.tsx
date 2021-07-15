import { FC, ReactNode } from 'react'
import { ContainerComponent, Wrapper } from './styles'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

type ContainerProps = {
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <ContainerComponent>
      <Wrapper>
        <Navbar />
        {children}
      </Wrapper>
      <Footer />
    </ContainerComponent>
  )
}