import styled from "styled-components"

export const Wrapper = styled.div`
  width: 32px;
  height: 34px;
  position: relative;

  img {
    max-width: 26.67px;
    max-height: 26.67px;
    width: 100%;
    height: 100%;
  }
`

export const AmountCircle = styled.span`
  position: absolute;
  top: -3px;
  right: -3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background: #3CD3C1;
  font-weight: 600;
  font-size: 8px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 50%;
`