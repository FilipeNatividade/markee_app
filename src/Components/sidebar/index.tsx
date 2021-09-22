// import { File } from '@styled-icons/boxicons-regular/File'

import {
  Container,
  Title,
  Header,
  ImageHeader,
  SubTitle,
  ParagraphSubTitle,
  HRow,
  ButtonAdd,
  // List,
  // Anchor,
  // DeleteButton,
} from './style'

const Sidebar = () => {
  // let currentStatus = ''

  // const getStatus = (status: string) => {
  //   if (status === 'saved') {
  //     currentStatus = './images/check.svg'
  //   } else if (status === 'saving') {
  //     currentStatus = './images/loading.svg'
  //   } else if (status === 'editing') {
  //     currentStatus = './images/dot.svg'
  //   }
  // }

  return (
    <Container>
      <Header>
        <ImageHeader src='./images/logo192.png' alt='logo' />
        <Title>markee<span>.</span></Title>
      </Header>
      <SubTitle><HRow /><ParagraphSubTitle>Arquivos</ParagraphSubTitle></SubTitle>
      <ButtonAdd>+ Adicionar arquivo</ButtonAdd>
      <ul>
        {/* {
          files.map(item => (
            // eslint-disable-next-line no-sequences
            getStatus(item.status),
            item.active
              ? <List className='active' key={item.id}><Anchor href='/'><File className='iconFile iconFileActive' />{item.name}</Anchor><img src={currentStatus} alt={currentStatus} className={item.status} /></List>
              : <List key={item.id}><Anchor href='/'><File className='iconFile' />{item.name}</Anchor><DeleteButton>X</DeleteButton></List>
          ))
        } */}
      </ul>
    </Container>
  )
}
export default Sidebar
