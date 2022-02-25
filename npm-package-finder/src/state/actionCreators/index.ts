import axios from "axios"
import { Dispatch } from "redux"
import { ERepoActionType, TRepoAction } from "../actions"

const URL = 'https://registry.npmjs.org/-/v1/search'

export const searchRepos = (term: string) => {
  return async (dispatch: Dispatch<TRepoAction>) => {
    dispatch({
      type: ERepoActionType.search
    })

    try {
      const { data } = await axios.get(URL, {
        params: {
          text: term
        }
      })

      dispatch({
        type: ERepoActionType.searchSuccess,
        payload: data.objects.map((item: any) => item.package.name)
      })
    } catch (error: any) {
      console.error(error)
      dispatch({
        type: ERepoActionType.searchError,
        payload: error
      })
    }
  }
}