import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html{
  font-size: 62.5%;
}
body{
  font-family: "DM sans", sans-serif;
}
button, input, a{
  border: none;
  cursor: pointer;
  outline: none;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
`
export default GlobalStyled
