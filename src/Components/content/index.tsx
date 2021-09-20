import { File } from '@styled-icons/boxicons-regular/File'
// import { files } from 'resources/file-list'

import {
  Container,
  InputHeader,
  InputTitle,
} from './style'

const Content = () => {
  return (
    <Container>
      <InputHeader>
        <File className='iconFile' />
        <InputTitle placeholder='Título' />
      </InputHeader>

    </Container>
  )
}
export default Content
