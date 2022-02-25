import { ESongActions, ISong } from "../common/types"

export const selectSong = (song: ISong) => {
  return {
    type: ESongActions.selectSong,
    payload: song
  }
}
