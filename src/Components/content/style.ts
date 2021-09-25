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
  flex-direction: column;
  font-size: 1.8rem;
  font-weight: 500;
  font-family: 'DM sans';
  line-height: 19px;
  min-height: 90%;
  margin-top: 32px;
  @media only screen and (min-width:1025px) {
    flex-direction: row;

  }
`

export const TexteareaContainer = styled.textarea`
  border: none;
  font-family: 'Incosolata';
  font-size: 1.8rem;
  resize: none;
  margin-bottom: 25px;
  outline: none;
  width: 100%;
  @media only screen and (min-width:1025px) {
    width: 50%;
    margin-bottom: 0;
  }
`

export const MarkedownContainer = styled.div`${({ theme }) => css`
  border-top:2px solid ${theme.colors.gray} ;
  color: ${theme.colors.black};
  font-size: 1.6rem;
  line-height: 3rem;
  padding-left: 32px;
  width: 100%;
  @media only screen and (min-width:1025px) {
    border: none;
    border-left:2px solid ${theme.colors.gray} ;
    width: 50%;
  }
`}`
