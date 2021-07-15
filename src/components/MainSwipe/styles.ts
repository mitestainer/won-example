import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 110px;

  .swipe-dot {
    background-color: #D3D3D3;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color .5s;
    border: 0;
    margin-top: 15px;

    &.is-active {
      background-color: #F231A5;
    }
  }
`

type SlideProps = {
  backgroundImage: string
}

export const Slide = styled.div<SlideProps>`
  width: 1042px;
  height: 100%;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  position: relative;
  border-radius: 4px;
  margin: 0 auto;
`

export const SlideInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 40px 44px;
  
  p {
    color: #FAFAFA;

    &:nth-child(1) {
      font-weight: 600;
      font-size: 28px;
      line-height: 42px;
    }

    &:nth-child(2) {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 22px;

      span {
        font-weight: 700;
        color: #F231A5;
      }
    }
  }

  button {
    height: 55px;
    width: 182px;
  }
`

export const ReleaseTag = styled.div`
  position: absolute;
  height: 36px;
  width: 138px;
  background-color: #3CD3C1;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.05em;
  color: #FAFAFA;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  top: 51px;
  right: -15px;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -8px;
    border-top: 0 solid transparent;
    border-left: 15.5px solid rgba(60, 211, 193, 0.44);
    border-bottom: 8.82px solid transparent;
  }
`