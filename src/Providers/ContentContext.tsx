import { createContext, useContext, useState, RefObject, useRef, ReactNode, SetStateAction, Dispatch, useEffect, ChangeEvent } from 'react'
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
  titleFile: string
  setTitleFile: Dispatch<SetStateAction<string>>
  contentFile: string
  setContentFile: Dispatch<SetStateAction<string>>
  createNewFile: any
  inputRef: RefObject<HTMLInputElement>
  selectFile: any
  deleteFile: any
  updateFileName: any
  updateFileContent: any
}
// arrumar esses dois type any

type TypeChildren = {
  children: ReactNode | ReactNode[]
}

const ContentContext = createContext<TypeCreate>({} as TypeCreate)

export const GlobalProvider = ({ children }: TypeChildren) => {
  const [files, setFiles] = useState<TypeFile[]>([])
  console.log(files)
  const [titleFile, setTitleFile] = useState<string>('')
  const [contentFile, setContentFile] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const updateSutatus = () => {
      const file = files.find(item => item.active === true)

      if (!file || file.status !== 'editing') {
        return
      }

      timer = setTimeout(() => {
        setFiles(files => files.map(item => {
          if (item.active) {
            return {
              ...item,
              status: 'saving',
            }
          }
          return item
        }))

        setTimeout(() => {
          setFiles(files => files.map(item => {
            if (item.active) {
              return {
                ...item,
                status: 'saved',
              }
            }

            return item
          }))
        }, 300)
      }, 300)
    }

    updateSutatus()
    return () => clearTimeout(timer)
  }, [files])

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

  const updateFileName = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(files => files.map(item => {
      if (item.id === id) {
        return {
          ...item,
          name: e.target.value,
          status: 'editing',
        }
      }

      return item
    }))
  }

  const updateFileContent = (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFiles(files => files.map(item => {
      if (item.id === id) {
        return {
          ...item,
          content: e.target.value,
          status: 'editing',
        }
      }
      return {
        ...item,
        active: false,
      }
    }))
  }

  const selectFile = (id: string) => {
    inputRef.current?.focus()

    setFiles(files => files.map(item => {
      console.log(item)
      if (item.id === id) {
        return {
          ...item,
          active: true,
        }
      }
      return {
        ...item,
        active: false,
      }
    }))
  }

  const deleteFile = (id: string) => {
    setFiles(files => files.filter(item => item.id !== id))
  }

  return (
    <ContentContext.Provider
      value={{
        files,
        setFiles,
        titleFile,
        setTitleFile,
        contentFile,
        setContentFile,
        inputRef,
        createNewFile,
        updateFileName,
        updateFileContent,
        selectFile,
        deleteFile,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}

export const useGlobalContent = () => useContext(ContentContext)
