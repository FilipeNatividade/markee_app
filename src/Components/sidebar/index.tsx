import { File } from '@styled-icons/boxicons-regular/File'
import { DotSingle } from '@styled-icons/entypo/DotSingle'
import { files } from 'resources/file-list'

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
  return (
    <Container>
      <Header>
        <ImageHeader src='logo192.png' alt='logo' />
        <Title>markee<span>.</span></Title>
      </Header>
      <SubTitle><HRow /><ParagraphSubTitle>Arquivos</ParagraphSubTitle></SubTitle>
      <ButtonAdd>+ Adicionar arquivo</ButtonAdd>
      <ul>
        {
          files.map(item => (
            item.active
              ? <List key={item.id}><Anchor href='/'><File className='iconFile iconFileActive' />{item.name}</Anchor><DotSingle className='iconDot' /></List>
              : <List key={item.id}><Anchor href='/'><File className='iconFile' />{item.name}</Anchor><DeleteButton>X</DeleteButton></List>
          ))
        }
      </ul>
    </Container>
  )
}
export default Sidebar
