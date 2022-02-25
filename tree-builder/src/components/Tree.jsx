import React, { useEffect } from 'react'
import nodes from '../node'
import TreeNode from './TreeNode';

const Tree = ({ tree, level = 0 }) => {
  if (tree.length === 0) return null

  return (
    <div>
      {tree.map(subTree => (
        <TreeNode key={subTree.id} node={subTree} level={level}>
          <Tree tree={subTree.children} level={level + 1} />
        </TreeNode>
      ))}
    </div>
  )
}

export default Tree
