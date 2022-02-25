export const getTree = (tree, id = undefined, parentAttr = 'parent') =>
  tree
    .filter(node => node[parentAttr] === id)
    .map(node => ({ ...node, children: getTree(tree, node.id) }));
