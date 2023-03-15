import { useState } from 'react'
import { useTheme } from '../../utils/hooks'
import HomeIllustration from '../../assets/home-illustration.svg'
import { StyledLink } from '../../utils/style/Atoms'
import {
  HomeWrapper,
  HomeContainer,
  LeftCol,
  StyledTitle,
  Illustration,
} from './style'
import MyComponent from './MyComponent'

function Home() {
  const { theme } = useTheme()
  const [display, setDisplay] = useState(true)

  return (
    <HomeWrapper>
      <HomeContainer theme={theme}>
        <LeftCol>
          {display && <MyComponent />}
          <button onClick={() => setDisplay(!display)}>
            {display ? 'Cacher' : 'Afficher'} Mon composant
          </button>
          <StyledTitle theme={theme}>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration} />
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home
