import React from 'react';
import { EActionTypes, IVideo } from '../common/types';
import { htmlUnescape } from 'escape-goat'
import { connect } from 'react-redux';
import { clearSelectedVideo } from '../actions';

interface IVideoDetailProps {
  video: IVideo
  clearSelectedVideo: () => { type: EActionTypes }
}

const VideoDetail: React.FC<IVideoDetailProps> = (
  { video, clearSelectedVideo }) => {
  const getFormattedDate = (date: string): string =>
    new Date(date).toLocaleDateString(undefined, {
      year: 'numeric', month: 'long', day: 'numeric'
    })

  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`

  const closeVideo = () => {
    clearSelectedVideo()
  }

  return (
    <div className="card mt-3">
      <button type="button"
        className="btn btn-secondary"
        onClick={closeVideo}>&times;</button>

      <iframe src={videoSource}
        style={{
          minHeight: '240px',
          height: '480px',
          maxHeight: '480px',
        }}
        title={video.snippet.title} />

      <div className="card-body">
        <h5 className="card-title">{htmlUnescape(video.snippet.title)}</h5>
        <p className="card-text">{video.snippet.description}</p>
        <p className="card-text">
          <small className="text-muted">
            Published on {getFormattedDate(video.snippet.publishedAt)}
          </small>
        </p>
      </div>
    </div>
  );
};

export default connect(null, { clearSelectedVideo })(VideoDetail)
