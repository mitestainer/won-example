import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { ReleaseTag, Slide, SlideInfo, Wrapper } from './styles'
import { Button } from '../Button';
import crashlandsImg from '../../images/crashlands.jpg'

export const MainSwipe = () => {
  return (
    <Wrapper>
      <Splide options={{
        type: 'loop',
        arrows: false,
        autoplay: true,
        interval: 5000,
        direction: 'ttb',
        height: '583px',
        classes: {
          page: 'swipe-dot'
        }
      }}>
        <SplideSlide>
          <Slide backgroundImage={crashlandsImg}>
            <SlideInfo>
              <p>Desafie a morte</p>
              <p>Jogue a nova temporada de <span>CrashLands</span></p>
              <Button>Comprar agora</Button>
            </SlideInfo>
          </Slide>
        </SplideSlide>
        <SplideSlide>
          <Slide backgroundImage={crashlandsImg}>
            <ReleaseTag>Lançamento</ReleaseTag>
            <SlideInfo>
              <p>Desafie a morte</p>
              <p>Jogue a nova temporada de <span>CrashLands</span></p>
              <Button>Comprar agora</Button>
            </SlideInfo>
          </Slide>
        </SplideSlide>
        <SplideSlide>
          <Slide backgroundImage={crashlandsImg}>
            <SlideInfo>
              <p>Desafie a morte</p>
              <p>Jogue a nova temporada de <span>CrashLands</span></p>
              <Button>Comprar agora</Button>
            </SlideInfo>
          </Slide>
        </SplideSlide>
        <SplideSlide>
          <Slide backgroundImage={crashlandsImg}>
            <ReleaseTag>Lançamento</ReleaseTag>
            <SlideInfo>
              <p>Desafie a morte</p>
              <p>Jogue a nova temporada de <span>CrashLands</span></p>
              <Button>Comprar agora</Button>
            </SlideInfo>
          </Slide>
        </SplideSlide>
      </Splide>
    </Wrapper>
  )
}