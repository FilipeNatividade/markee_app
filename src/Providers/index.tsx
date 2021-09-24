import { ReactNode } from 'react'
import { GlobalProvider } from './content-context/ContentContext'

type TypeChildren = {
  children: ReactNode | ReactNode[]
}

const Providers = ({ children }: TypeChildren) => {
  return (
    <GlobalProvider>
      {children}
    </GlobalProvider>
  )
}

export default Providers
