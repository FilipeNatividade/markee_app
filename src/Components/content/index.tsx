import { File } from '@styled-icons/boxicons-regular/File'

import {
  Container,
  Header,
  InputTitle,
  MainContainer,
  TexteareaContainer,
  MarkedownContainer,
} from './style'

const Content = () => {
  return (
    <Container>
      <Header>
        <File className='iconFile' />
        <InputTitle placeholder='Sem título' />
      </Header>
      <MainContainer>
        <TexteareaContainer placeholder='Digite aqui seu markedown' />
        <MarkedownContainer />
      </MainContainer>
    </Container>
  )
}
export default Content
