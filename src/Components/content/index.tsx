import { useState, ChangeEvent } from 'react'
import marked from 'marked'
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
  const [content, setContent] = useState('')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

  return (
    <Container>
      <Header>
        <File className='iconFile' />
        <InputTitle placeholder='Sem título' />
      </Header>
      <MainContainer>
        <TexteareaContainer
          placeholder='Digite aqui seu markedown'
          value={content}
          onChange={handleChange}
        />
      </MainContainer>
      <MarkedownContainer dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Container>
  )
}
export default Content
