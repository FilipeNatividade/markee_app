type TypeFile = {
  id: string
  name: string
  content: string
  active: boolean
  status: 'editing' | 'saving' | 'saved'
}

export const files: TypeFile[] = [
  {
    id: '0',
    name: 'README.me',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: '1',
    name: 'CONTRIBUTING.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: '2',
    name: 'LICENSE.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: '3',
    name: 'Links.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: '4',
    name: 'roadmap.md',
    content: '## Bootcamp Brainn Co. Lorem ipsum dolor sit amet simet',
    active: true,
    status: 'saved',
  },
]
