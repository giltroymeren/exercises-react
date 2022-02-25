import React from 'react'
import { ITreeNode } from '../common/types'
import './TreeNode.css'

const TreeNode: React.FC<{ node: ITreeNode, level: number, children?: any }> =
  ({ node, level, children }) => {
    const labelText = `checkbox-${node.id}`
    return (
      <div className={`row level-${level}`}>
        <label htmlFor={labelText}>
          <input type="checkbox"
            id={labelText}
            data-testid={labelText} />
          <span>{node.name}</span>
        </label>
        {children}
      </div>
    )
  }

export default TreeNode
