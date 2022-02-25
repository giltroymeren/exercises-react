export interface ITreeNode {
  id: number
  name: string
  parent?: number
  children?: any | undefined
}