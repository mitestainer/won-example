import styled from 'styled-components'

export const InputWrapper = styled.div`
  width: 380px;
  height: 50px;
  background-color: #EAEAEA;
  border-radius: 2px;
  padding: 0 13px;
  display: flex;
  align-items: center;

  & + & {
    margin-top: 10px;
  }

  img {
    width: 24px;
    height: 24px;
  }

  input {
    font-size: 14px;
    line-height: 21px;
    color: #969696;
    background-color: transparent;
    margin-left: 11px;
    border: 0;
    outline: none;
    width: 100%;

    &::placeholder {
      opacity: 1;
      font-family: 'Poppins', sans-serif;
    }
  }
`