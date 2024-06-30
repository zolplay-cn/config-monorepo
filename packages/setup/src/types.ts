export interface Config {
  name: string
  dependencies?: string[]
  devDependencies?: string[]
  files?: Array<{ path: string; content: string }>
}
