import styled, { css } from 'styled-components/macro'

const Title = styled.h1`${({ theme }) => css`
background-color: ${theme.colors.black};
color: ${theme.colors.primary};

`}`

const App = () => {
  return (
    <Title>App</Title>
  )
}
export default App
