import { useState, ChangeEvent } from 'react'
import marked from 'marked'
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

import('highlight.js').then(hljs => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }
      return h.highlightAuto(code).value
    },
  })
})

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
