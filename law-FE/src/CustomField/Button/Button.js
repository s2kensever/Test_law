import React from 'react'
import PropTypes from 'prop-types'

import './Button.css';

function Button(props) {
    const {children, type } = props;

    return (
        <button
            className="Button"
            type={type}
        >
            {children}
        </button>
    )
}

Button.propTypes = {

}

export default Button

