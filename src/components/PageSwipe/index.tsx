import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { FC } from 'react'
import { Wrapper, Reel, Highlight, HighlightContent } from './styles'
import arrowImg from '../../images/arrow.svg'
import { Button } from '../Button'
import { Card } from '../Card'

type PageSwipeProps = {
  title?: string
  highlight?: {
    title: string
    text: string
    background: any
    character: any
    textAlign: 'right' | 'left'
  }
  data: {
    image: string,
    name: string,
    publisher: string,
    price: number,
    discount?: number
  }[]
}

export const PageSwipe: FC<PageSwipeProps> = ({ title, highlight, data }) => {
  return (
    <Wrapper>
      {title && <p>{title}</p>}
      {highlight && <Highlight background={highlight.background} align={highlight.textAlign || 'right'}>
        <img src={highlight.character} alt="" />
        <HighlightContent align={highlight.textAlign || 'right'}>
          <p>{highlight.title}</p>
          <p>{highlight.text}</p>
          <Button>Baixe agora</Button>
        </HighlightContent>
      </Highlight>}
      <Reel>
        <Splide options={{
          pagination: false,
          perPage: 3,
          autoWidth: true,
          gap: 80,
          classes: {
            arrows: 'splide__arrows slide-arrows',
            arrow: 'splide__arrow slide-arrow',
            prev: 'splide__arrow--prev previous'
          }
        }}
          renderControls={() => (
            <div className="splide__arrows slide-arrows">
              <button className="splide__arrow splide__arrow--prev slide-arrow previous">
                <img src={arrowImg} alt="" />
              </button>
              <button className="splide__arrow splide__arrow--next slide-arrow">
                <img src={arrowImg} alt="" />
              </button>
            </div>
          )}>
          {data.map(gameData => (
            <SplideSlide>
              <Card data={gameData} />
            </SplideSlide>
          ))}
        </Splide>
      </Reel>
    </Wrapper>
  )
}