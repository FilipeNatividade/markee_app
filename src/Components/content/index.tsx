import { useGlobalContent } from '../../Providers/ContentContext'
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
  const { files, inputRef, updateFileName, updateFileContent } = useGlobalContent()

  return (
    <Container>
      {files.map(item => (
        item.active &&
          <>
            <Header>
              <File className='iconFile' />
              <InputTitle
                value={item.name}
                onChange={updateFileName(item.id)}
                ref={inputRef}
                autoFocus
              />
            </Header>
            <MainContainer>
              <TexteareaContainer
                placeholder='Digite aqui seu markedown'
                value={item.content}
                onChange={updateFileContent(item.id)}
              />
              <MarkedownContainer dangerouslySetInnerHTML={{ __html: marked(item.content) }} />
            </MainContainer>
          </>
      ))}
    </Container>
  )
}
export default Content
