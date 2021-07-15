import styled from "styled-components"

export const Wrapper = styled.nav`
  display: flex;

  > a > img {
    width: 110px;
    height: 33px;
  }
`

export const Links = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #FAFAFA;
  flex: 1 1;
  margin-left: 42px;

  > a {
    padding: 0 4px;

    & + a {
      margin-left: 32px;
    }
  }

  .active {
    border-bottom: 3px solid #F231A5;
  }
`