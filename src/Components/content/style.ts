import styled, { css } from 'styled-components/macro'

export const Container = styled.div`${({ theme }) => css`
  color: ${theme.colors.primary};
  height: 100vh;
  padding: 3.2rem;
  width: 100%;
`}`

export const Header = styled.header`
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
export const MainContainer = styled.main`
  display: flex;
  font-size: 1.8rem;
  font-weight: 500;
  font-family: 'DM sans';
  line-height: 1.9rem;
  min-height: 90%;
  margin-top: 3.2rem;
`

export const TexteareaContainer = styled.textarea`
  border: none;
  font-family: 'Incosolata';
  font-size: 1.8rem;
  resize: none;
  outline: none;
  width: 50%;
`

export const MarkedownContainer = styled.div`${({ theme }) => css`
  border-left:.2rem solid ${theme.colors.gray} ;
  color: ${theme.colors.black};
  font-size: 1.6rem;
  padding-left: 3.2rem;
  width: 50%;
`}`
