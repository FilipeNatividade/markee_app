import styled, { css } from 'styled-components/macro'

export const Container = styled.main`${({ theme }) => css`
  color: ${theme.colors.primary};
  height: 100vh;
  padding: 3.2rem;
  width: 100%;
`}`

export const InputHeader = styled.header`
  align-items: center;
  display: flex;
  width: 100%;
  .iconFile{
    height:3rem;
    margin-right: 1rem;
  }
`

export const InputTitle = styled.input`
  font-size: 1.8rem;
  font-weight: 500;
  font-family: 'DM sans';
  height: 2.5rem;
  width: 90%;
`
