import { createContext, useContext, useState, RefObject, useRef, ReactNode, SetStateAction, Dispatch } from 'react'
import { v4 as idv4 } from 'uuid'

type TypeFile = {
  id: string
  name: string
  content: string
  active: boolean
  status: string
}

type TypeCreate = {
  files: TypeFile[]
  setFiles: Dispatch<SetStateAction<TypeFile[]>>
  createNewFile: any
  inputRef: RefObject<HTMLInputElement>
}


type TypeChildren = {
  children: ReactNode | ReactNode[]
}

const ContentContext = createContext<TypeCreate>({} as TypeCreate)

export const GlobalProvider = ({ children }: TypeChildren) => {
  const [files, setFiles] = useState<TypeFile[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const createNewFile = () => {
    inputRef.current?.focus()
    setFiles(files => files
      .map(item => ({
        ...item,
        active: false,
      }))
      .concat({
        id: idv4(),
        name: 'Sem título',
        content: '',
        active: true,
        status: 'saved',
      }))
  }
  return (
    <ContentContext.Provider value={{ files, setFiles, createNewFile, inputRef }}>
      {children}
    </ContentContext.Provider>
  )
}

export const useGlobalContent = () => useContext(ContentContext)
