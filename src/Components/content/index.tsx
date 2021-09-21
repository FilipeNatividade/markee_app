import { useState, ChangeEvent } from 'react'
import marked from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/vs.css'
import { File } from '@styled-icons/boxicons-regular/File'

import {
  Container,
  Header,
  InputTitle,
  MainContainer,
  TexteareaContainer,
  MarkedownContainer,
} from './style'

highlight.highlightAll()

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
        <MarkedownContainer dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </MainContainer>
    </Container>
  )
}
export default Content
