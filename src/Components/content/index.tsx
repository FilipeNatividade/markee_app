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
        <InputTitle placeholder='CONTRIBUT|' />
      </Header>
      <MainContainer>
        <TexteareaContainer placeholder={files[4].content}>
        </TexteareaContainer>
        <MarkedownContainer>
          {files[4].content}
        </MarkedownContainer>
      </MainContainer>
    </Container>
  )
}
export default Content
