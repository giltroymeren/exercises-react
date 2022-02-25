import React, { useContext } from 'react'
import TreeContext from '../context/TreeContext'
import './TreeNode.css'

const TreeNode = ({ node, level, children }) => {
  const treeContext = useContext(TreeContext)
  const { setBranchChecked } = treeContext

  return (
    <div className={`row level-${level}`}>
      <label>
        <input type="checkbox"
          checked={node.checked}
          onChange={() => setBranchChecked(node.id)} />
        <span>{node.name}</span>
      </label>
      {children}
    </div>
  )
}

export default TreeNode
