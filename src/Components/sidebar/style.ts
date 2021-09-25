import { Dispatch } from 'react'
import styled, { css, keyframes } from 'styled-components/macro'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.aside`${({ theme }) => css`
/* display: none; */
  background-color: ${theme.colors.black};
  color: ${theme.colors.primary};
  padding: 0 32px;
  width: 100%;
  .active{
    background-color: ${theme.colors.lightBlack};
  }
  @media only screen and (min-width:750px) {
    min-height: 100vh;
    width: 400px;
  }
`}`

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  @media only screen and (min-width:750px) {
    padding: 45px 0;
  }
`

export const ImageHeader = styled.img`
  width: 90%;
`

export const SubTitle = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`

export const ParagraphSubTitle = styled.p`${({ theme }) => css`
  color: ${theme.colors.white};
  font-size: 1.6rem;
  background-color: ${theme.colors.black};
  margin-left: 32px;
  padding: 0 5px;
  z-index: 1;
`}`

export const HRow = styled.hr`${({ theme }) => css`
  height: 2px;
  border: none;
  position: absolute;
  width: 100%;
  background-color: ${theme.colors.primary};
`}`

export const ButtonContainer = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`

export const ButtonMenu = styled.button`${({ theme }) => css`
  background-color: transparent;
  height:33px;
  .menu{
    color: ${theme.colors.primary};
    margin-right: 20px;
    width: 33px;
  }
  @media only screen and (min-width:750px) {
    display: none;
  }
`}
`
export const ButtonAdd = styled.button`${({ theme }) => css`
  background-color: ${theme.colors.primary};
  border-radius: 5px;
  color: ${theme.colors.black};
  height:33px ;
  max-width: 236px;
  width: 100%;
  @media only screen and (min-width:750px) {
    margin: 32px auto;
  }
`}`

export const MenuDesktop = styled.ul`
  display: none;
  @media only screen and (min-width:750px) {
    display: block;
  }
`

export const List = styled.ul`
  background-color: rgba(30,41,59,.9);
  margin-left: -32px;
  position: absolute;
  width: 236px;
  z-index: 1;
  @media only screen and (min-width:750px) {
    min-height: 100vh;
    margin-left: 0;
    position: relative;
    width: 250px;
    z-index: 0;
  }
`
export const ListItem = styled.li`${({ theme }) => css`
  align-items: center;
  border-radius: 5px;
  display: flex;
  font-size: 1.6rem;
  height: 37px;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 10px;
  padding: 0 15px;
  width: 100%;
  .iconFile{
    height: 20px;
    margin-right: 10px;
  }
  .iconFileActive{
    color: ${theme.colors.primary};
  }
    &:hover{
      background-color: ${theme.colors.lightBlack};
      a{
        color: ${theme.colors.white}
      }
      button{
        visibility: visible;
      }
    }
  .saving{
    margin-right: -10px;
    display: inline-block;
    animation: ${rotate} 1s linear infinite;
    padding: 20px 10px;
    font-size: 1.2rem;
  }
`}`

export const Anchor = styled.a`
  color: rgba(255, 255, 255, 0.6);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const DeleteButton = styled.button`
  background-color:transparent;
  color: #fff;
  @media only screen and (min-width:750px) {
    visibility:hidden;
  }
`
