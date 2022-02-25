import React, { useContext } from 'react'
import TreeContext from '../context/TreeContext'
import { getTree } from '../common/utils'
import nodes from '../node'
import Tree from './Tree'

const TreeWrapper = () => {
  const treeContext = useContext(TreeContext)
  const { tree } = treeContext

  return (
    <React.Fragment>
      <h1>tree-builder</h1>
      <Tree tree={tree} />
    </React.Fragment>
  )
}

export default TreeWrapper
