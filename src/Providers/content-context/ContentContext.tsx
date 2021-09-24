import localforage from 'localforage'
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
  useEffect,
  useRef,
  RefObject,
  ChangeEvent,
} from 'react'
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
  inputRef: RefObject<HTMLInputElement>
  createNewFile: any
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
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<TypeFile[]>([])
  const [titleFile, setTitleFile] = useState<string>('')
  const [contentFile, setContentFile] = useState<string>('')

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

  useEffect(() => {
    localforage.setItem('myMarkeedown', files)
  }, [files])

  useEffect(() => {
    const getFileStorage = async () => {
      const fileStorage = await localforage.getItem<TypeFile[]>('myMarkeedown')

      fileStorage ? setFiles(fileStorage) : createNewFile()
    }
    getFileStorage()
  }, [])

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

  const updateFileName = (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setFiles(files => files.map(item => {
      if (item.id === id) {
        return {
          ...item,
          name: event.target.value,
          status: 'editing',
        }
      }
      return item
    }))
  }

  const updateFileContent = (id: string) => (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFiles(files => files.map(item => {
      if (item.id === id) {
        return {
          ...item,
          content: event.target.value,
          status: 'editing',
        }
      }
      return item
    }))
  }

  const selectFile = (id: string) => {
    inputRef.current?.focus()

    setFiles(files => files.map(item => {
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
