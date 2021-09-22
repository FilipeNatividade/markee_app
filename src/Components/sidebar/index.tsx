import { File } from '@styled-icons/boxicons-regular/File'
import { v4 as idv4 } from 'uuid'
import { useState } from 'react'

import {
  Container,
  Title,
  Header,
  ImageHeader,
  SubTitle,
  ParagraphSubTitle,
  HRow,
  ButtonAdd,
  List,
  Anchor,
  DeleteButton,
} from './style'

type TypeFile = {
  id: string
  name: string
  content: string
  active: boolean
  status: string
}

const Sidebar = () => {
  let currentStatus = ''
  const [files, setFiles] = useState<TypeFile[]>([])

  const getStatus = (status: string) => {
    if (status === 'saved') {
      currentStatus = './images/check.svg'
    } else if (status === 'saving') {
      currentStatus = './images/loading.svg'
    } else if (status === 'editing') {
      currentStatus = './images/dot.svg'
    }
  }

  const createNewFile = () => {
    setFiles(files => files
      .map(item => ({
        ...item,
        active: false,
      }))
      .concat({
        id: idv4(),
        name: 'Sem título',
        content: '',
        active: true,
        status: 'saved',
      }))
  }

  return (
    <Container>
      <Header>
        <ImageHeader src='./images/logo192.png' alt='logo' />
        <Title>markee<span>.</span></Title>
      </Header>
      <SubTitle><HRow /><ParagraphSubTitle>Arquivos</ParagraphSubTitle></SubTitle>
      <ButtonAdd onClick={createNewFile}>+ Adicionar arquivo</ButtonAdd>
      <ul>
        {
          files.map(item => (
            // eslint-disable-next-line no-sequences
            getStatus(item.status),
            item.active
              ? <List className='active' key={item.id}><Anchor href='/'><File className='iconFile iconFileActive' />{item.name}</Anchor><img src={currentStatus} alt={currentStatus} className={item.status} /></List>
              : <List key={item.id}><Anchor href='/'><File className='iconFile' />{item.name}</Anchor><DeleteButton title={`Remover aquivo ${item.name}`}>X</DeleteButton></List>
          ))
        }
      </ul>
    </Container>
  )
}
export default Sidebar
