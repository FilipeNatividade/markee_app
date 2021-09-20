import {
  Aside,
  Title,
  Header,
  ImageHeader,
  SubTitle,
  ParagraphSubTitle,
  HRow,
  ButtonAdd,
  List,
  Anchor,
  DeleteButton
} from './style'

const Sidebar = () => {
  type TypeFile = {
    id: string
    name: string
    content: string
    active: boolean
    status: 'editing' | 'saving' | 'saved'
  }

  const files: TypeFile[] = [
    {
      id: '0',
      name: 'README.me',
      content: '',
      active: false,
      status: 'saved',
    },
    {
      id: '1',
      name: 'CONTRIBUTING.md',
      content: '',
      active: false,
      status: 'saved',
    },
    {
      id: '2',
      name: 'LICENSE.md',
      content: '',
      active: false,
      status: 'saved',
    },
    {
      id: '3',
      name: 'Links.md',
      content: '',
      active: false,
      status: 'saved',
    },
    {
      id: '4',
      name: 'roadmap.md',
      content: '',
      active: true,
      status: 'saved',
    },
  ]

  return (
    <Aside>
      <Header>
        <ImageHeader src='logo192.png' alt='logo' />
        <Title>markee<span>.</span></Title>
      </Header>
      <SubTitle><HRow /><ParagraphSubTitle>Arquivos</ParagraphSubTitle></SubTitle>
      <ButtonAdd>+ Adicionar arquivo</ButtonAdd>
      <ul>
        {
          files.map(item => (
            <List key={item.id}><Anchor href='/'>{item.name}</Anchor><DeleteButton>X</DeleteButton></List>
          ))
        }
      </ul>
    </Aside>
  )
}
export default Sidebar
