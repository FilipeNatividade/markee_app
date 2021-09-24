import { File } from '@styled-icons/boxicons-regular/File'
import { useGlobalContent } from '../../Providers/ContentContext'

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

const Sidebar = () => {
  const { files, createNewFile, selectFile, deleteFile } = useGlobalContent()

  let currentStatus = ''

  const getStatus = (status: string) => {
    if (status === 'saveng') {
      currentStatus = './images/dot.svg'
    } else if (status === 'saved') {
      currentStatus = './images/check.svg'
    } else if (status === 'editing') {
      currentStatus = './images/loading.svg'
    }
  }

  // const handleHistoryRoute = (id: string) => (event: MouseEvent) => {
  //   event.preventDefault()
  //   selectFile(id)
  //   window.history.pushState(null, '', `/${id}`)
  // }

  return (
    <Container>
      <a href='/'>
        <Header>
          <ImageHeader src='./images/logo192.png' alt='logo' />
          <Title>markee<span>.</span></Title>
        </Header>
      </a>
      <SubTitle><HRow /><ParagraphSubTitle>Arquivos</ParagraphSubTitle></SubTitle>
      <ButtonAdd onClick={createNewFile}>+ Adicionar arquivo</ButtonAdd>
      <ul>
        {
          files.map(item => (
            // eslint-disable-next-line no-sequences
            getStatus(item.status),
            item.active
              ? <List className='active' key={item.id}><Anchor href={`/${item.id}`}><File className='iconFile iconFileActive' />{item.name}</Anchor><img src={currentStatus} alt={item.status} className={item.status} /></List>
              : <List key={item.id}><Anchor onClick={() => selectFile(item.id)} href={`/${item.id}`}><File className='iconFile' />{item.name}</Anchor><DeleteButton onClick={() => deleteFile(item.id)} title={`Remover aquivo ${item.name}`}>X</DeleteButton></List>
          ))
        }
      </ul>
    </Container>
  )
}
export default Sidebar
