import { Component } from 'react'
import { ThemeContext } from '../../utils/context'
import {
  ProfileWrapper,
  ProfileDetails,
  Picture,
  Title,
  JobTitle,
  Location,
  TitleWrapper,
  Price,
  SkillsWrapper,
  Skill,
  Availability
} from './style'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profileData: {},
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params

    fetch(`http://localhost:8000/freelance?id=${id}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({ profileData: jsonResponse?.freelanceData })
      })
  }

  render() {
    const { profileData } = this.state
    const { picture, name, location, tjm, job, skills, available, id } =
      profileData

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <ProfileWrapper theme={theme}>
            <Picture src={picture} alt={name} height={150} width={150} />
            <ProfileDetails theme={theme}>
              <TitleWrapper>
                <Title>{name}</Title>
                <Location>{location}</Location>
              </TitleWrapper>
              <JobTitle>{job}</JobTitle>
              <SkillsWrapper>
                {skills &&
                  skills.map((skill) => (
                    <Skill key={`skill-${skill}-${id}`} theme={theme}>
                      {skill}
                    </Skill>
                  ))}
              </SkillsWrapper>
              <Availability available={available}>
                {available ? 'Disponible maintenant' : 'Indisponible'}
              </Availability>
              <Price>{tjm} € / jour</Price>
            </ProfileDetails>
          </ProfileWrapper>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Profile
