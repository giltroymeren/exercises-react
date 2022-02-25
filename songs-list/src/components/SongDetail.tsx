import { useSelector } from 'react-redux'
import { IState } from '../common/types';

const SongDetail = () => {
  const selectedSong = useSelector((state: IState) => state.selectedSong)

  return (
    <div className='ui'>
      {!selectedSong && (
        <div className="ui icon info message">
          <i className="info circle icon"></i>
          <div className="header">
            No song selected
          </div>
        </div>
      )}

      {selectedSong && (
        <div className="ui raised card">
          <div className="content">
            <div className="header">{selectedSong.title}</div>
            <div className="meta">{selectedSong.artist}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SongDetail;
