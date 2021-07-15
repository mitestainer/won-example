import styled from 'styled-components'
import bannerBackground from '../../images/banner-background.jpg'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
`

export const Banner = styled.aside`
  height: 100%;
  color: #FAFAFA;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 56px 55px 25px;
  background-image: url(${bannerBackground});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  flex-basis: 53%;

  &:before {
    content: '';
    position: absolute;
    background-color: rgba(3, 5, 23, 0.85);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  img {
    width: 126px;
    height: 38px;
  }

  * {
    z-index: 1;
  }

  > p:last-child {
    text-align: center;
  }
`

export const TextWrapper = styled.div`
  position: absolute;
  top: 33.6vh;

  p {
    &:nth-child(1) {
      font-weight: 700;
      font-size: 52px;
      line-height: 120%;
      letter-spacing: -0.025em;
      max-width: 676px;
    }

    &:nth-child(2) {
      font-weight: 300;
      font-size: 26px;
      line-height: 39px;
      letter-spacing: 0.03em;
      max-width: 606px;

      > span {
        font-size: 26px;
        font-weight: 600;
        line-height: 39px;
        letter-spacing: 0.03em;
        color: #F231A5; //
      }
    }
  }
`

export const LoginArea = styled.section`
  flex-basis: 47%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 200px;
    height: 59.84px;
    margin-bottom: 67px;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  > a {
    font-size: 12px;
    line-height: 18px;
    color: #030517;
    text-align: right;
    margin-top: 7px;
  }
    
  p {
    &:nth-child(1) {
      font-weight: 600;
      font-size: 26px;
      line-height: 39px;
      color: #030517;
      border-left: 7px solid #35BDAC;
      margin-bottom: 27px;
      padding-left: 11px;
    }

    &:last-child {
      font-size: 14px;
      line-height: 21px;
      color: #030517;
      text-align: center;

      > a {
        color: #35BDAC;
      }
    }
  }

  button {
    width: 380px;
    height: 50px;
    text-transform: uppercase;
    margin: 30px 0 17px;
    display: block;
  }
`