import fs from 'fs'

type MenuItem = {
  text: string
  link: string
  index: string
}

// eslint-disable-next-line no-bitwise
export const getRandom = (max: number, min = 0) => ~~(Math.random() * (max - min)) + min
// eslint-disable-next-line no-bitwise
export const random = (max: number, min = 0) => ~~(Math.random() * (max - min)) + min

export const getMenuItem = (path: string) => {
  const filesInDirectory = fs.readdirSync(`.${path}`)

  const menu: MenuItem[] = []

  if (filesInDirectory.length) {
    filesInDirectory.forEach((file) => {
      if (file.endsWith('.md') && !['index.md', 'demo.md', 'index.md'].includes(file)) {
        const text = file.slice(0, -3)
        menu.push({
          text,
          index: `./${file}`,
          link: `${path.slice(5)}/${text}`
        })
      }
    })
  }

  return menu
}
