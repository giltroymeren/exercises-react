export interface IVideo {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  }
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
        width: number;
        height: number;
      }
    }
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  }
}

export enum EActionTypes {
  'clearVideos',
  'getVideos',
  'selectVideo',
  'clearSelectedVideo'
}
