import { File } from '@styled-icons/boxicons-regular/File'
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import { Fragment, useState } from 'react'
import { useGlobalContent } from '../../Providers/content-context/ContentContext'

import {
  Container,
  Header,
  ImageHeader,
  SubTitle,
  ParagraphSubTitle,
  HRow,
  ButtonContainer,
  ButtonMenu,
  ButtonAdd,
  MenuDesktop,
  List,
  ListItem,
  Anchor,
  DeleteButton,
} from './style'

const Sidebar = () => {
  const { files, createNewFile, selectFile, deleteFile } = useGlobalContent()
  const [stateMenu, setStateMenu] = useState(false)

  const getStatus = (status: string) => {
    if (status === 'saving') {
      return './images/loading.svg'
    } else if (status === 'saved') {
      return './images/check.svg'
    } else if (status === 'editing') {
      return './images/dot.svg'
    }
  }

  const showMenuMobile = () => {
    setStateMenu(!stateMenu)
  }

  return (
    <Container>
      <Header>
        <ImageHeader src='./images/logo_name.svg' alt='logo' />
      </Header>
      <SubTitle><HRow /><ParagraphSubTitle>Arquivos</ParagraphSubTitle></SubTitle>
      <ButtonContainer>
        <ButtonMenu onClick={showMenuMobile}><Menu className='menu' /></ButtonMenu> <ButtonAdd onClick={createNewFile}>+ Adicionar arquivo</ButtonAdd>
      </ButtonContainer>
      {
        stateMenu &&
          <List>
            {
              files.map(item => (
                item.active
                  ? <ListItem className='active' key={item.id}><Anchor><File className='iconFile iconFileActive' />{item.name}</Anchor><img src={getStatus(item.status)} alt={item.status} className={item.status} /></ListItem>
                  : <ListItem key={item.id}><Anchor onClick={e => { e.preventDefault(); selectFile(item.id); window.history.pushState(null, '', `/${item.id}`) }}><File className='iconFile' />{item.name}</Anchor><DeleteButton onClick={() => deleteFile(item.id)} title={`Remover aquivo ${item.name}`}>X</DeleteButton></ListItem>
              ))
            }
          </List>
      }
      <MenuDesktop>
        <List>
          {
            files.map(item => (
              item.active
                ? <ListItem className='active' key={item.id}><Anchor><File className='iconFile iconFileActive' />{item.name}</Anchor><img src={getStatus(item.status)} alt={item.status} className={item.status} /></ListItem>
                : <ListItem key={item.id}><Anchor onClick={e => { e.preventDefault(); selectFile(item.id); window.history.pushState(null, '', `/${item.id}`) }}><File className='iconFile' />{item.name}</Anchor><DeleteButton onClick={() => deleteFile(item.id)} title={`Remover aquivo ${item.name}`}>X</DeleteButton></ListItem>
            ))
          }
        </List>
      </MenuDesktop>
    </Container>
  )
}
export default Sidebar
