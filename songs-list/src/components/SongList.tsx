import { useSelector, useDispatch } from 'react-redux'
import { ISong, IState } from '../common/types';
import { selectSong } from '../actions'
import { useEffect } from 'react';

const SongList = () => {
  const songs = useSelector((state: IState) => state.songs)
  const dispatch = useDispatch()

  useEffect(() => console.log(songs), [])

  return (
    <div className='ui middle aligned divided list'>
      {!songs.length && (
        <div className="ui icon info message">
          <i className="info circle icon"></i>
          <div className="header">
            No songs available
          </div>
        </div>
      )}

      {songs.length && songs.map((song: ISong) => {
        return (
          <div className='item'
            key={song.id}>
            <div className='right floated content'>
              <button className='ui button primary'
                onClick={event => dispatch(selectSong(song))}>
                Info
              </button>
            </div>

            <i className="music icon"></i>
            <div className='content'>{song.title}</div>
          </div>
        )
      })}
    </div>
  );
};


export default SongList
