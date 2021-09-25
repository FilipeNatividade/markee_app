import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'resources/theme'
import GlobalStyled from 'globalStyle'
import Asidebar from 'Components/sidebar'
import Content from 'Components/content'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width:750px) {
    flex-direction: row;
    }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyled />
        <Asidebar />
        <Content />
      </Container>
    </ThemeProvider>
  )
}
export default App
