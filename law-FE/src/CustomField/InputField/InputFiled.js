import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';

import './InputFiled.css';

function InputFiled(props) {
    const {
        field, form, 
        lable, title,type
    } = props;
    // const {name, value, onChange} = field;
    const {name} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name] ;
    // console.log('input err' , errors, showError, name, field)
    return (
        <div className="InputFiled">
            <div className="Input-content">
                <span className="span">{title}</span>
                <TextField 
                    label={lable}
                    variant="outlined" 
                    style={{flexGrow:"1"}}
                    // name={name}
                    // value={value}
                    // onChange={onChange}
                    {...field}
                    type={type}
                />
            </div>
            {showError ?  <p className="err">{errors[name]}</p>: null }
        </div>
    )
}

InputFiled.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    label: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string
}

InputFiled.defaultProps = {
    label: '',
    title: '',
    type: 'text'
}

export default InputFiled;