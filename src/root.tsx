import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from 'resources/theme'
import App from 'app'

import 'normalize.css'

const GlobalStyled = createGlobalStyle`
*{
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
}
body{
  font-family: "DM sans", sans-serif;
}
`

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <App />
    </ThemeProvider>
  )
}
export default Root
