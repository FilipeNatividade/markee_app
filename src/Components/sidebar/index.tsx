import { Aside, Title, Header, ImageHeader, SubTitle, ParagraphSubTitle, HRow, ButtonAdd } from './style'

const Sidebar = () => {
  type TypeFile = {
    id: number,
    icon: string,
    name: string,
  }

  const files: TypeFile[] = [
    {
      id: 0,
      icon: 'icon',
      name: 'README.me',
    },
    {
      id: 1,
      icon: 'icon',
      name: 'CONTRIBUTING.md',
    },
    {
      id: 2,
      icon: 'icon',
      name: 'LICENSE.md',
    },
    {
      id: 3,
      icon: 'icon',
      name: 'Links.md',
    },
    {
      id: 4,
      icon: 'icon',
      name: 'roadmap.md',
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
      {
        files.map(item => console.log(item))
      }
    </Aside>
  )
}
export default Sidebar
