import styled from 'styled-components'

// polygon(-148px -58.77%, 114.40% -28.17%, 114.49% 147.08%, -14.4% 106.53%)

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1042px;
  margin: 72px auto;

  > p {
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    color: #FAFAFA;
    padding-left: 11px;
    border-left: 7px solid #35BDAC;
    margin-bottom: 17px;
  }
`

type HighlightProps = {
  background: string
  align: string
}

export const Highlight = styled.div<HighlightProps>`
  height: 320px;
  background-image: ${({ background }) => `url(${background})`};
  position: relative;
  padding: 48px;
  

  &::before {
    position: absolute;
    content: '';
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  * {
    z-index: 1;
    position: inherit;
  }

  img {
    position: absolute;
    bottom: 0;
    left: ${({ align }) => align === 'right' ? '0' : 'unset'};
    right: ${({ align }) => align === 'left' ? '0' : 'unset'};
  }
`

type HighlightContentProps = {
  align: string
}

export const HighlightContent = styled.div<HighlightContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: ${({ align }) => align === 'right' ? 'flex-end' : 'flex-start'};
  height: 100%;

  p {
    color: #FFFFFF;
    line-height: 1.1;

    &:nth-child(1) {
      font-weight: 600;
      font-size: 28px;
    }

    &:nth-child(2) {
      font-weight: 300;
      font-size: 18px;
    }
  }

  button {
    height: 39.87px;
    width: 169px;
    margin-top: 17px;
  }
`

export const Reel = styled.div`
  margin-top: 32px;
  width: calc(100% + 10px);

  .slide-arrows {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -109px;
    right: -109px;
  }

  .slide-arrow {
    background-color: transparent;
    height: 43px;
    width: 43px;

    > img {
      height: 18px;
      width: 18px;
    }
  }

  .previous {
    img {
      transform: rotate(180deg);
    }
  }
`