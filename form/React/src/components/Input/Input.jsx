import React from 'react';
import PropTypes from 'prop-types'; 
import '../../style.css';
import {isInvalid} from './utils/validation'; 

export class Input extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        password: PropTypes.string
    }

    static defaultProps = {
        placeholder: 'Enter something',
        password: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.props.onChange(name, value, isInvalid(name, value, this.props.password));
    }
    render() {
        return (
            <input name={this.props.name}
                    type="text" 
                    placeholder={this.props.placeholder}
                    disabled={this.props.disabled} 
                    onChange={this.handleChange}
            />
        )
    }
}
