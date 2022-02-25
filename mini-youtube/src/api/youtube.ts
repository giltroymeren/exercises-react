import axios from 'axios'

const API_YOUTUBE = 'AIzaSyDRIxJ_qwMPRglrUeo4_Q-zohtnuSzxYD4'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: API_YOUTUBE
  }
})