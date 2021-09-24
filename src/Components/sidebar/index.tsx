import { File } from '@styled-icons/boxicons-regular/File'
import { useGlobalContent } from '../../Providers/content-context/ContentContext'

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

  const getStatus = (status: string) => {
    if (status === 'saving') {
      return './images/loading.svg'
    } else if (status === 'saved') {
      return './images/check.svg'
    } else if (status === 'editing') {
      return './images/dot.svg'
    }
  }

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
            item.active
              ? <List className='active' key={item.id}><Anchor><File className='iconFile iconFileActive' />{item.name}</Anchor><img src={getStatus(item.status)} alt={item.status} className={item.status} /></List>
              : <List key={item.id}><Anchor onClick={e => { e.preventDefault(); selectFile(item.id); window.history.pushState(null, '', `/${item.id}`) }}><File className='iconFile' />{item.name}</Anchor><DeleteButton onClick={() => deleteFile(item.id)} title={`Remover aquivo ${item.name}`}>X</DeleteButton></List>
          ))
        }
      </ul>
    </Container>
  )
}
export default Sidebar
