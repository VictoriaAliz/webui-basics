import React from "react";
import PropTypes from 'prop-types';
import Select from './Select';

class Dropdown extends React.Component {

    static propTypes = {
        trigger: PropTypes.bool.isRequired,
        getData: PropTypes.func
    }

    defaultProps = {
        getData: () => new Promise((resolve) => resolve([]))
    }

    state = {
        activeCountryId: '',
        activeCityId: '',
        activeStreetId: '',
        dataFlow : ['activeCountryId', 'activeCityId', 'activeStreetId']
    }
    
    loadCountries = () => {
        return this.props.getData();
    }

    loadCities = (countryId) => {
        return this.props.getData(countryId);
    }

    loadStreets = (cityId) => {
        return this.props.getData(this.state.activeCountryId, cityId);
    }

    resetAdditionals = (key) => {
        const index = this.state.dataFlow.indexOf(key) + 1;
        return this.state.dataFlow.slice(index);
    }

    reducer = (accumulator, currentValue) => {
        return {...accumulator, [currentValue]: ''}
    };
                
    handleChange = (key, value) => {
        this.setState(() => {
            return {
                [key]: value,
                ...this.resetAdditionals(key).reduce(this.reducer, {}),
            };
        });
    }
        
    render() {
        return(
            <div>
                <Select
                    trigger={true}
                    onChange={countryValue => this.handleChange('activeCountryId', countryValue)}
                    loadData={this.loadCountries}
                    disabled={false}
                />
                <Select
                    trigger={this.state.activeCountryId}
                    onChange={cityValue => this.handleChange('activeCityId', cityValue)}
                    loadData={this.loadCities}
                    disabled={!this.state.activeCountryId}
                />
                <Select
                    trigger={this.state.activeCityId}
                    onChange={streetValue => this.handleChange('activeStreetId', streetValue)}
                    loadData={this.loadStreets}
                    disabled={!this.state.activeCityId}
                />
            </div>
        )
    }
}

export default Dropdown;
