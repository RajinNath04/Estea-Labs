import React, { useState } from 'react'
import Select from 'react-select'
import { ErrorMessage } from 'formik'
import cl from 'classnames'
import 'antd/dist/antd.css';

const SingleSelect = (props) => {

  const [error, setError] = useState(0)
  const { options, name, label, onBlur, value, placeholder, err, className, readOnly, isLoading, isSearchable, defaultValue, isClearable } = props

  const onChange = (option) => {
    if (option !== null)
      props.onChange(props.name, option.value)
    else
      props.onChange(props.name, null)
    setError(0)
  }

  return (
    <div className={cl('SingleSelect', className ? className : '')}>
      {!(err && error) ? <label htmlFor={name}>
        {label}
      </label> : ''}
      <ErrorMessage name={name}>
        {errorMessage => {
          errorMessage && setError(1)
          return (
            <div className='error_message'>
              {label && errorMessage}
            </div>
          )
        }}
      </ErrorMessage>
      <Select
        closeMenuOnSelect={true}
        name={name}
        options={options}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        isSearchable={isSearchable ? true : false}
        isClearable={isClearable ? true : false}
        className={cl('_single-select', (err && error || error) ? 'error_input' : '')}
        classNamePrefix='_single-select'
        placeholder={placeholder || ''}
        isDisabled={readOnly}
        isLoading={isLoading}
        defaultValue={defaultValue} />
    </div>
  )
}
export default SingleSelect
