import { Fragment } from 'react'
import { useGlobalContent } from '../../Providers/content-context/ContentContext'
import marked from 'marked'
import 'highlight.js/styles/vs.css'
import { File } from '@styled-icons/boxicons-regular/File'
import { v4 as idv4 } from 'uuid'

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

  return (
    <Container>
      {files.map(item => (
        item.active &&
          <Fragment key={idv4()}>
            <Header>
              <File className='iconFile' />
              <InputTitle
                ref={inputRef}
                value={item.name}
                onChange={updateFileName(item.id)}
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
          </Fragment>
      ))}
    </Container>
  )
}
export default Content
