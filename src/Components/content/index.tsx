import { File } from '@styled-icons/boxicons-regular/File'
import { files } from 'resources/file-list'

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
        <TexteareaContainer placeholder='Digite aqui seu markedown'>
        </TexteareaContainer>
        <MarkedownContainer>

        </MarkedownContainer>
      </MainContainer>
    </Container>
  )
}
export default Content
