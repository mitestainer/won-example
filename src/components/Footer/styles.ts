import styled from 'styled-components'

export const FooterArea = styled.footer`
  background-color: #FFFFFF;
  color: #666666;
  clip-path: polygon(0 17.86%, 100% 0%, 100% 100%, 0% 100%);
  padding-top: 100px;
  
  img {
    height: 32px;
    width: 107px;
  }
  `

export const Wrapper = styled.div`
  max-width: 1042px;
  margin: 0 auto;
`

export const ContentWrapper = styled.div`
  margin: 32px 0;
  display: grid;
  grid-template-columns: repeat(10,1fr);
  column-gap: 30px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    color: #000000;
    position: relative;
    margin-bottom: 15px;

    &::after {
      content: '';
      position: absolute;
      background-color: #3CD3C1;
      height: 4px;
      width: 22px;
      bottom: -3px;
      left: 0;
    }
  }

  a, p {
    font-size: 14px;
    line-height: 21px;
  }

  address {
    font-style: normal;
  }

  &:nth-child(1) {
    grid-column: 1 / 3;
  }

  &:nth-child(2) {
    grid-column: 4 / 6;
  }

  &:nth-child(3) {
    grid-column: 7 / 8;
  }

  &:nth-child(4) {
    grid-column: 9 / 11;
  }
`

export const Copywright = styled.p`
  font-size: 12px;
  line-height: 18px;
  padding: 18px 0;
  text-align: center;
  border-top: 1px solid;
`