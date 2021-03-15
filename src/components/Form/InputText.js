import React, { useState } from 'react'
import { ErrorMessage } from 'formik'
import { Input } from 'antd'
import cl from 'classnames'
import 'antd/dist/antd.css';

import './InputStyle.scss'

const InputText = (props) => {
    const { id, value, name, type, onChange, icon, onBlur, label, err, disabled, maxLength, minLength, placeholder } = props;

    const [updateType, setUpdatedType] = useState(props.type)

    const passwordViewHandler = () => {
        if (updateType === "text")
            setUpdatedType("password")
        else
            setUpdatedType("text")
    }

    return (
        <div className='input input-wrapper'>
            {
                label !== undefined
                    ? <label htmlFor={name}> {label} </label>
                    : ''
            }

            <Input
                id={id && id}
                name={name}
                disabled={disabled}
                type={updateType || ''}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="off"
                className={cl((err) ? 'error_input' : '')}
                style={{ padding: icon !== undefined ? '0 0 0 35px' : "10px" }}
                maxLength={maxLength}
                minLength={minLength}
            />



            <ErrorMessage name={name}>
                {errorMessage => {
                    return (
                        <p className='error_message'>
                            {errorMessage}
                        </p>
                    )
                }}
            </ErrorMessage>
        </div>
    )
}

export default InputText