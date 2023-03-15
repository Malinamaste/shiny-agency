import { useTheme } from '../../utils/hooks'
import EmailInput from '../EmailInput'
import { FooterContainer, NightModeButton } from './style'

function Footer() {
  const { toggleTheme, theme } = useTheme()

  return (
    <FooterContainer>
      <EmailInput theme={theme} />
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer
