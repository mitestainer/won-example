import styled from 'styled-components';

export const Wrapper = styled.a`
  width: 293px;
  height: 217px;
  filter: drop-shadow(0px 1px 5px rgba(3, 5, 23, 0.05));
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    height: 137px;
    width: 293px;
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
  padding: 12px 15px;
  line-height: 1.1;

  p {
    &:nth-child(1) {
      font-weight: 600;
      font-size: 16px;
      color: #030517;
    }

    &:nth-child(2) {
      font-weight: 500;
      font-size: 12px;
      color: #BBBBBB;
    }
  }

  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
    background-color: #3CD3C1;
    border-radius: 2px;
    padding: 1px 8px;
    align-self: flex-end;
  }
`

export const Tag = styled.div`
  position: absolute;
  right: -10px;
  top: 13px;
  height: 24px;
  width: 71px;
  background-color: #FF5F5F;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: #FAFAFA;
  text-transform: uppercase;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -6px;
    border-top: 0 solid transparent;
    border-left: 10.49px solid rgba(255, 95, 95, 0.44);
    border-bottom: 6px solid transparent;
  }
`