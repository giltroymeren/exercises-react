import React from 'react'
import { connect } from 'react-redux'
import { deleteTech } from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'

const TechItem = ({
  tech,
  deleteTech
}) => {
  const onDelete = () => {
    deleteTech(tech.id)
    M.toast({
      html:
        `<i class='material-icons'>info</i>&nbsp;Deleted technician #${tech.id}`
    })
  }

  return (
    <li className='collection-item'>
      <span className='grey-text'>#{tech.id}</span>{' '}
      <span>{tech.lastName.toUpperCase()}, {tech.firstName}</span>

      <a href='#!'
        className='secondary-content'
        onClick={onDelete}>
        <div className="material-icons grey-text">delete</div>
      </a>
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
}

export default connect(null, {
  deleteTech
})(TechItem)
