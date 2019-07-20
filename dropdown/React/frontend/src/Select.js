import React from "react";
import PropTypes from 'prop-types';

class Select extends React.Component {

    static propTypes = {
        onChange: PropTypes.func.isRequired,
        loadData: PropTypes.func,
        trigger: PropTypes.bool, 
        disabled: PropTypes.bool
    }

    defaultProps = {
        loadData: () => new Promise((resolve) => resolve([])), 
        trigger: true, 
        disabled: true
    }

    state = {
        data: []
    }

    async onLoad() {
        const loadedData = await this.props.loadData(this.props.trigger);
        return this.setState({data: loadedData})
    }

    componentDidMount() {
        if(this.props.trigger) this.onLoad();
    }

    componentDidUpdate(prevProps) { 
        if(this.props.trigger && this.props.trigger !== prevProps.trigger) this.onLoad();
    }

    handleChange = (event) => {
        const {value} = event.target;
        this.props.onChange(value);
    }
    
    render() {
        return (
            <select 
                onChange={this.handleChange} 
                disabled={this.props.disabled}
            >
            {this.state.data.map(optionValue => <option key={optionValue}>{optionValue}</option>)}
            </select>
        )
    }
}

export default Select;