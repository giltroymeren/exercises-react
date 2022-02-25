import { combineReducers } from 'redux'
import { ESongActions, ISong, IState } from '../common/types'

const initialState: IState = {
  selectedSong: null,
  songs: [
    {
      id: 'ncyY7Hd',
      artist: 'The Isley Brothers',
      title: 'Choosey Lover',
      duration: '4:42'
    },
    {
      id: 'kf8Fsl9',
      artist: 'Smokey Robinson',
      title: 'Quiet Storm',
      duration: '7:49'
    },
    {
      id: 'm3789fs',
      artist: 'Anita Baker',
      title: 'Lately',
      duration: '4:02'
    },
    {
      id: 'hdfkrhf',
      artist: 'Janet Jackson',
      title: "That's The Way Love Goes",
      duration: '4:25'
    }
  ]
}

const songsReducer = () => initialState.songs

interface ISelectSongActionType {
  type: ESongActions.selectSong;
  payload: ISong;
}

const selectedSongReducer =
  (songId: string | null = null, action: ISelectSongActionType) => {
    switch (action.type) {
      case ESongActions.selectSong:
        return action.payload
      default:
        return songId
    }
  }

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})