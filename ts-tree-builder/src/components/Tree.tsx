import React from 'react'
import { ITreeNode } from '../common/types'
import { MESSAGE_EMPTY_TREE } from '../common/utils';
import TreeNode from './TreeNode';

const Tree: React.FC<{ tree: ITreeNode[], level?: number }> =
  ({ tree, level = 0 }) => {
    if (tree.length === 0) return <div>{MESSAGE_EMPTY_TREE}</div>

    return (
      <div>
        {tree.map(subTree => (
          <TreeNode key={subTree.id} node={subTree} level={level}>
            {(subTree.children?.length > 0)
              && <Tree tree={subTree.children} level={level + 1} />}
          </TreeNode>
        ))}
      </div>
    )
  }

export default Tree
