import React, { createContext, ReactNode, useReducer, useState } from "react"
import { getTree } from '../common/utils'
import nodes from '../nodes'
import TreeReducer from './TreeReducer'
import { ITreeNode } from "../common/types"

interface ITreeContext {
  tree: ITreeNode[],
  setTree: any
}

const TreeContext = createContext<ITreeContext | undefined>(undefined)

export const TreeProvider: React.FC = ({ children }) => {
  const [tree, setTree] = useState<ITreeNode[]>(
    getTree(nodes)
  )

  const setBranchChecked = () => {
    console.log(tree)
  }

  return <TreeContext.Provider
    value={{
      tree,
      setTree,
    }}>
    {children}
  </TreeContext.Provider>
}

export default TreeContext