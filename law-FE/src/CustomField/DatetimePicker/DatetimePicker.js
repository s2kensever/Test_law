import React from 'react'
import PropTypes from 'prop-types'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import './DatetimePicker.css';

function DatetimePicker(props) {
    const {
        field, form, 
        label
    } = props;

    const {name, value, onChange} = field;

    const convertToDefEventPara = (name, value) => ({
		target: {
			name,
			value,
		},
	});
    
    return (
        <div className="InputFiledLable">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    inputVariant='outlined'
                    label="Ngày sinh"
                    format='dd/MM/yyyy'
                    name={name}
                    value={value}
                    onChange={(date) => onChange(convertToDefEventPara(name, date))}
                    fullWidth
                />
		    </MuiPickersUtilsProvider>
        </div>
    )
}

DatetimePicker.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    label: PropTypes.string,
}

DatetimePicker.defaultProps = {
    label: ''
}

export default DatetimePicker;

