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
  background-color: ${theme.colors.black};
  color: ${theme.colors.primary};
  min-height: 100vh;
  padding: 0 32px;
  width: 332px;
  .active{
    background-color: ${theme.colors.lightBlack};
  }
`}`

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 45px 0;
`

export const ImageHeader = styled.img`
  margin-right: 15px;
  width: 35px;
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

export const ButtonAdd = styled.button`${({ theme }) => css`
  background-color: ${theme.colors.primary};
  border-radius: 5px;
  color: ${theme.colors.black};
  height:33px ;
  margin: 32px auto;
  width: 100%;
`}`

export const List = styled.li`${({ theme }) => css`
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
  visibility:hidden;
  background-color:transparent;
  color: #fff;
`
