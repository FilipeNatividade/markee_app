import styled, { css } from 'styled-components/macro'

export const Container = styled.div`${({ theme }) => css`
  color: ${theme.colors.primary};
  height: 100vh;
  padding: 32px;
  width: 100%;
`}`

export const Header = styled.header`
  align-items: center;
  display: flex;
  width: 100%;
  .iconFile{
    height:30px;
    margin-right: 10px;
  }
`

export const InputTitle = styled.input`

  font-size: 1.8rem;
  font-weight: 500;
  font-family: 'DM sans';
  height: 25px;
  width: 90%;
`
export const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.8rem;
  font-weight: 500;
  font-family: 'DM sans';
  line-height: 19px;
  min-height: 90%;
  margin-top: 32px;
`

export const TexteareaContainer = styled.textarea`
  border: none;
  border: 1px solid red;
  font-family: 'Incosolata';
  font-size: 1.8rem;
  resize: none;
  outline: none;
  width: 50%;
`

export const MarkedownContainer = styled.div`${({ theme }) => css`
  border-left:2px solid ${theme.colors.gray} ;
  color: ${theme.colors.black};
  font-size: 1.6rem;
  padding-left: 32px;
  width: 50%;
`}`
