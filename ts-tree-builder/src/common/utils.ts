import { ITreeNode } from '../common/types'

export const getTree = (tree: ITreeNode[], id: any = undefined): ITreeNode[] =>
  tree
    .filter(node => node.parent === id)
    .map(node => ({ ...node, checked: false, children: getTree(tree, node.id) }));

export const MESSAGE_EMPTY_TREE = 'Nothing to show'