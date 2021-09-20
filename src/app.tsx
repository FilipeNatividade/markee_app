import { ThemeProvider } from 'styled-components'
import { theme } from 'resources/theme'
import GlobalStyled from 'root-style'
import Asidebar from 'Components/sidebar'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Asidebar />
    </ThemeProvider>
  )
}
export default App
