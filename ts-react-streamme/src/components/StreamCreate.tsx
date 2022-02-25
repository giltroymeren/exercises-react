import React, { InputHTMLAttributes } from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'

interface IProps { }

interface IFormData {
  title: string
  description: string
}

type TComponentType = IProps & InjectedFormProps<IFormData, IProps>

class StreamCreate extends
  React.Component<TComponentType> {

  onSubmit = (formData: IFormData) => {
    console.log(formData)
  }

  render() {
    const { pristine, submitting, handleSubmit } = this.props
    return (
      <form className='ui form'
        onSubmit={handleSubmit(this.onSubmit)}>
        <div className="field">
          <label>Title</label>
          <Field name='title'
            type='text'
            label='Name'
            placeholder='Name the stream'
            component='input'
          />
        </div>

        <div className="field">
          <label>Description</label>
          <Field name='description'
            type='text'
            label='Description'
            placeholder='Describe the stream'
            component='input'
          />
        </div>

        <button className='ui button primary'
          disabled={pristine || submitting}>
          Create
        </button>
      </form>
    )
  }
};

const validate = (data: IFormData) => {
  const errors: IFormData = {
    title: '',
    description: ''
  };

  if (!data.title) {
    errors.title = 'Field required. Enter a title.'
  }
  if (!data.description) {
    errors.description = 'Field required. Enter a description.'
  }

  return errors
}

export default reduxForm<IFormData, IProps>({
  form: 'streamCreate',
  validate
})(StreamCreate);
