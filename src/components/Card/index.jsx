import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import { CardWrapper, CardLabel, CardImage, CardTitle } from './style'
import { Component } from 'react'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFavorite: false,
    }
  }

  setFavorite = () => {
    this.setState({ isFavorite: !this.state.isFavorite })
  }

  render() {
    const { theme, picture, label, title } = this.props
    const { isFavorite } = this.state
    const star = isFavorite ? '⭐️' : ''

    return (
      <CardWrapper theme={theme} onClick={this.setFavorite}>
        <CardLabel theme={theme}>{label}</CardLabel>
        <CardImage src={picture} alt="freelance" />
        <CardTitle theme={theme}>
          {star} {title} {star}
        </CardTitle>
      </CardWrapper>
    )
  }
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Card
