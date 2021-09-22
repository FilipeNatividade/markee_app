import { useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'resources/theme'
import GlobalStyled from 'app-style'
import Asidebar from 'Components/sidebar'
import Content from 'Components/content'

const Container = styled.div`
display: flex;
`

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyled />
        <Asidebar inputRef={inputRef} />
        <Content inputRef={inputRef} />
      </Container>
    </ThemeProvider>
  )
}
export default App
