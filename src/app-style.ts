import styled, { css } from 'styled-components/macro'

export const Title = styled.h1`${({ theme }) => css`
background-color: ${theme.colors.black};
color: ${theme.colors.primary};
`}`
