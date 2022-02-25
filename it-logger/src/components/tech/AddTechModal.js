import React from 'react'
import { useState } from 'react/cjs/react.development'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTech } from '../../actions/techActions'

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onFirstNameChangeHandler = (event) => {
    setFirstName(event.target.value)
  }

  const onLastNameChangeHandler = (event) => {
    setLastName(event.target.value)
  }

  const onSubmitHandler = () => {
    if (firstName === '' || lastName === '') {
      M.toast({
        html:
          `<i class='material-icons'>error_outline</i>&nbsp;
          Please enter name of the technician` })
    } else {
      addTech({
        firstName,
        lastName
      })
      setFirstName('')
      setLastName('')
    }
  }

  return (
    <div id="add-tech-modal"
      className='modal'
      style={modalStyle}>

      <div className="modal-content">
        <h4>New Technician</h4>

        <div className="row">
          <div className="input-field">
            <input type="text"
              name='first_name'
              value={firstName}
              onChange={onFirstNameChangeHandler} />
            <label htmlFor="nessage" className='active'>First Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input type="text"
              name='last_name'
              value={lastName}
              onChange={onLastNameChangeHandler} />
            <label htmlFor="message" className='active'>Last Name</label>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a href="#!"
          className="modal-close waves-effect waves-green blue btn"
          onClick={onSubmitHandler}>Submit</a>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%'
}

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
}

export default connect(null, {
  addTech
})(AddTechModal)
