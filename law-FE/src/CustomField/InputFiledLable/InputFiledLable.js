import React, {useState} from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import './InputFiledLable.css';

function InputFiledLable(props) {
    const [showPass, setShowPass] = useState(false);
    const {
        field, form, 
        lable, multiline, required, type, isNumber
    } = props;

    const {name, value, onChange} = field;
    const {setFieldValue} = form;

    const handleChangeNumber = (e) => {
        const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
         setFieldValue(name, e.target.value)
      }
    }
    
    var onChangeHandle = isNumber ? handleChangeNumber : onChange
    
    const handleClickShowPassword = () => {
        setShowPass(!showPass);
    };

    return (
        <div className="InputFiledLable">
            <TextField 
                id = "outlined-basic" 
                label = {lable}
                variant = "outlined" 
                style = {{flexGrow:"1"}}
                name = {name}
                value = {value}
                onChange = {onChangeHandle}
                multiline = {multiline}
                required = {required}
                type = {type && !showPass ? type : 'text'}
                InputProps={ type === 'password' ? {
                    endAdornment: <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPass ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                } : null}
            />
        </div>
    )
}

InputFiledLable.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    label: PropTypes.string,
    type: PropTypes.string
}

InputFiledLable.defaultProps = {
    label: '',
    type: 'text',
    multiline: false,
    required: false,
    isNumber: false
}

export default InputFiledLable;

