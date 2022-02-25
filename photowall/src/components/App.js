import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addPhoto, removePhoto, addComment } from "../redux/actions"
import Main from "./Main"

const mapStateToProps = (state) => {
  return {
    photos: state.photosReducer,
    comments: state.commentsReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPhoto,
    removePhoto,
    addComment,
  }, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App