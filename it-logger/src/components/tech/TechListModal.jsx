import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TechItem from './TechItem'
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techActions'

const TechListModal = ({
  tech: { techs, loading },
  getTechs
}) => {

  useEffect(() => {
    getTechs()
  }, [getTechs])

  return (
    <div id="tech-list-modal"
      className='modal'
      style={modalStyle}>

      <div className="modal-content">
        <h4>Our Technicians</h4>

        {!loading && techs === null ? (
          <p>No technicians available...</p>
        ) : (
          <ul className='collection'>
            {techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
          </ul>
        )}
      </div>
    </div>
  )
}

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  tech: state.tech,
})

const modalStyle = {
  width: '75%',
  height: '75%'
}

export default connect(mapStateToProps, {
  getTechs,
})(TechListModal)
