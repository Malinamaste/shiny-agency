import Card from '../../components/Card'
import { Loader } from '../../utils/style/Atoms'
import { PageTitle, PageSubtitle, LoaderWrapper, CardsContainer } from './style'
import { useFetch, useTheme } from '../../utils/hooks'
import { Link } from 'react-router-dom'

function Freelances() {
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  )

  const freelancersList = data?.freelancersList

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <div>
      <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList?.map((profile) => (
            <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
              <Card
                label={profile.job}
                title={profile.name}
                picture={profile.picture}
                theme={theme}
              />
            </Link>
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances
