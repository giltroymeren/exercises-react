import youtube from '../api/youtube'
import { EActionTypes, IVideo } from '../common/types'
import { TAppDispatch } from '../store'

interface IYouTubeResults {
  data: {
    items: IVideo[];
  }
}

export const clearVideos = () => {
  return {
    type: EActionTypes.clearVideos
  }
}

export const clearSelectedVideo = () => {
  return {
    type: EActionTypes.clearSelectedVideo
  }
}

export const getVideos = (term: string) =>
  async (dispatch: TAppDispatch): Promise<void> => {
    const response: IYouTubeResults = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    dispatch({
      type: EActionTypes.getVideos,
      payload: response.data.items
    })
  }  

export const selectVideo = (video: IVideo) => {
  return {
    type: EActionTypes.selectVideo,
    payload: video
  }
}