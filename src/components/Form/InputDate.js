import React, { useState } from 'react'
import { DatePicker } from 'antd'
import cl from 'classnames'
import { ErrorMessage } from 'formik'
import 'antd/dist/antd.css';
import moment from 'moment';

import './InputStyle.scss'

const InputDate = (props) => {

    const [error, setError] = useState(0)
    const [isFocus, setFocus] = useState(0);
    const [isPlaceHolderActive, setPlaceHolderActive] = useState(false);
    const { options, name, label, onChange, onBlur, placeholder, minDate, value, err, disabled, suffixIcon, format, disabledDate, disableType } = props

    const onFocus = () => {
        setPlaceHolderActive(true);
        setFocus(1)
    }

    const disabledCustomDate = () => {
        if (disableType === "FUTURE")
            return new Date() && new Date() < moment().endOf('day');
        else
            return new Date() && new Date() > moment().endOf('day');
    }

    const dateFormat = 'YYYY-MM-DD'

    return (
        <div className='inputDate inputDate-wrapper'>
            {
                label !== undefined
                    ? <label htmlFor={name}> {label} </label>
                    : ''
            }
            <DatePicker
                name={name}
                value={value === "" || !value ? null : moment(value, dateFormat)}
                disabledDate={disabledDate}
                options={options}
                onChange={onChange}
                //disabledDate={disabledCustomDate}
                suffixIcon={suffixIcon}
                disabled={disabled}
                onFocus={onFocus}
                format={format ? format : dateFormat}
                //minDate={minDate}
                // disabled={disabled ? true : false}
                // selected={(value && new Date(value)) || null}
                placeholder={placeholder}
                onBlur={onBlur}
                className={cl((err && error) ? 'error_input' : '')}
            />
            {/* <div className={(isPlaceHolderActive || value.length > 0) ? "inputDate-wrapper__placeholder active" : "inputDate-wrapper__placeholder"}>{placeholder}</div> */}
            <ErrorMessage name={name}>
                {errorMessage => {
                    setError(1)
                    return (
                        <div className='error_message'>
                            {errorMessage}
                        </div>
                    )
                }}
            </ErrorMessage>
        </div>
    )
}
export default InputDate