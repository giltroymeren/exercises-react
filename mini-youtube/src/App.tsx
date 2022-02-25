import { useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import { IVideo } from './common/types'
import VideoList from './components/VideoList';
import { connect } from 'react-redux';
import { TRootState } from './store';

interface IAppProps {
  selectedVideo: IVideo | null
}

const App: React.FC<IAppProps> = ({ selectedVideo }) => {
  return (
    <>
      <NavBar />

      <div className='container'>
        <SearchBar />

        <div className='row'>
          {selectedVideo && (
            <div className='col col-md-9'>
              <VideoDetail video={selectedVideo} />
            </div>
          )}

          <div className={`col ${selectedVideo && "col-md-3"}`}>
            <VideoList />
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state: TRootState) => {
  return {
    selectedVideo: state.videos.selected
  }
}

export default connect(mapStateToProps, {})(App)
