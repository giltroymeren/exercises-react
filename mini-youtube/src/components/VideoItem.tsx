import React from 'react';
import { EActionTypes, IVideo } from '../common/types';
import { htmlUnescape } from 'escape-goat'
import { connect } from 'react-redux';
import { selectVideo } from '../actions';

interface IVideoItem {
  video: IVideo
  selectVideo: (video: IVideo) => { type: EActionTypes, payload: IVideo }
}

const VideoItem: React.FC<IVideoItem> = ({
  video,
  selectVideo
}) => {
  const onClick = () => {
    selectVideo(video)
  }

  return (
    <div className="card bg-light mt-2"
      style={{ cursor: 'pointer' }}
      onClick={onClick}>
      <img className="card-img-top"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title} />

      <div className="card-body">
        <small className="card-title">{htmlUnescape(video.snippet.title)}</small>
      </div>
    </div>
  )
};

export default connect(null, { selectVideo })(VideoItem)
