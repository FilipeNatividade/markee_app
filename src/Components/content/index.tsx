import { useGlobalContent } from '../../Providers/content-context/ContentContext'
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
  const { files, updateFileName, updateFileContent, inputRef } = useGlobalContent()
  const file = files.find(item => item.active === true)
  console.log(file?.name)

  if (!file) {
    return null
  }
  return (
    <Container>
      <Header>
        <File className='iconFile' />
        <InputTitle
          ref={inputRef}
          value={file.name}
          onChange={event => updateFileName(event, file.id)}
          autoFocus
        />
      </Header>
      <MainContainer>
        <TexteareaContainer
          placeholder='Digite aqui seu markedown'
          value={file.content}
          onChange={(event) => updateFileContent(event, file.id)}
        />
        <MarkedownContainer dangerouslySetInnerHTML={{ __html: marked(file.content) }} />
      </MainContainer>
    </Container>
  )
}
export default Content
