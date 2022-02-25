import { createContext, useReducer } from "react";
import { getTree } from "../common/utils";
import nodes from "../node";
import TreeReducer, { ACTION_SET_BRANCH_CHECKED } from "./TreeReducer";

const TreeContext = createContext()

export const TreeProvider = ({ children }) => {
  const initialState = {
    tree: getTree(nodes)
  }

  const [state, dispatch] = useReducer(TreeReducer, initialState)

  const setBranchChecked = (id) => {
    console.log(`setBranchChecked ${id}`)

    const mapTree = (tree, id, isChild = false) =>
      tree.map(node => {
        if ((!isChild && node.id === id) || (isChild && node.parent === id)) node.checked = true
        console.log(node)

        if (node.children) {
          mapTree(node.children, node.id, true)
        }
      })

    mapTree(state.tree, id)

    const arr = state.tree

    dispatch({
      type: ACTION_SET_BRANCH_CHECKED,
      payload: arr
    })
  }

  return <TreeContext.Provider
    value={{
      tree: state.tree,

      setBranchChecked,
    }}>
    {children}
  </TreeContext.Provider>
}

export default TreeContext