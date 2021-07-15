import { Container } from '../../components/Container'
import { MainSwipe } from '../../components/MainSwipe'
import { PageSwipe } from '../../components/PageSwipe'

import bgCsGo from '../../images/bg-csgo.jpg'
import csGoCharacter from '../../images/character-csgo.png'

import bgBorderlands from '../../images/bg-borderlands.jpg'
import borderlandsCharacter from '../../images/character-borderlands.png'

import bgRd from '../../images/bg-rd.jpg'
import rdCharacter from '../../images/character-rd.png'

import pop from '../../images/population-zero.jpg'
import pw from '../../images/project-winter.jpg'

const popData = {
  image: pop,
  name: 'Population Zero',
  publisher: 'Other Ocean',
  price: 215,
  discount: 20
}

const pwData = {
  image: pw,
  name: 'Project Winter',
  publisher: 'Other Ocean',
  price: 215
}

const exampleData = [popData, pwData, popData, pwData]

export const Store = () => {
  return (
    <Container>
      <MainSwipe />
      <PageSwipe title="Lançamentos" data={exampleData} />
      <PageSwipe
        title="Mais populares"
        highlight={{
          title: 'Read Dead está de de volta!',
          text: 'Venha conhecer as novas aventuras de John Marston',
          background: bgRd,
          character: rdCharacter,
          textAlign: 'right'
        }}
        data={exampleData}
      />
      <PageSwipe title="Em breve" data={exampleData} />
      <PageSwipe
        highlight={{
          title: 'Borderlands 3!',
          text: 'Borderlands está de volta com muitas novidades.',
          background: bgBorderlands,
          character: borderlandsCharacter,
          textAlign: 'left'
        }}
        data={exampleData}
      />
      <PageSwipe
        title="Jogos grátis"
        highlight={{
          title: 'Já conhece o clássico CS:GO?',
          text: 'Jogue um dos maiores clássicos do FPS',
          background: bgCsGo,
          character: csGoCharacter,
          textAlign: 'right'
        }}
        data={exampleData}
      />
    </Container>
  )
}