import styled, { css } from 'styled-components/macro'

export const Aside = styled.aside`${({ theme }) => css`
  background-color: ${theme.colors.black};
  color: ${theme.colors.primary};
  height: 100vh;
  padding: 0 3.2rem;
  width: 332px;
`}`

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 4.5rem 0;
`

export const ImageHeader = styled.img`
  margin-right: 1.5rem;
  width: 3.5rem;
`

export const Title = styled.h1`${({ theme }) => css`
  font-size: 3rem;
  color: ${theme.colors.white};
  span{
    color: ${theme.colors.primary};
  }
`}`

export const SubTitle = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`

export const ParagraphSubTitle = styled.p`${({ theme }) => css`
  color: ${theme.colors.white};
  font-size: 1.6rem;
  background-color: ${theme.colors.black};
  margin-left: 3.2rem;
  padding: 0 0.5rem;
  z-index: 1;
`}`

export const HRow = styled.hr`${({ theme }) => css`
  height: 0.2rem;
  border: none;
  position: absolute;
  width: 100%;
  background-color: ${theme.colors.primary};
`}`

export const ButtonAdd = styled.button`${({ theme }) => css`
  background-color: ${theme.colors.primary};
  border-radius: .5rem;
  color: ${theme.colors.black};
  height:3.3rem ;
  margin: 3.2rem auto;
  width: 100%;
`}`

export const List = styled.li`${({ theme }) => css`
  align-items: center;
  border-radius: .5rem;
  display: flex;
  font-size: 1.6rem;
  height: 3.7rem;
  justify-content: space-between;
  padding: 0 1.5rem;
  width: 100%;
  .iconFile{
    height: 2rem;
    margin-right: 1rem;
  }
  .iconFileActive{
    color: ${theme.colors.primary};
  }
  .iconDot{
    height: 3rem;
    margin-right: -1rem;
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
  `}
`

export const Anchor = styled.a`
  color: rgba(255, 255, 255, 0.6);

`

export const DeleteButton = styled.button`
visibility:hidden;
background-color:transparent;
color: #fff;
`
