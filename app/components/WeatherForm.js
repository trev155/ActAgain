import React from 'react';
import PropTypes from 'prop-types';

export class WeatherForm extends React.Component {
    render() {
        let location_names = ["Toronto", "Vancouver", "Calgary", "Montreal", "Ottawa", "Edmonton", "Halifax", "Winnipeg"];
        location_names = location_names.sort();
        let location_names_options = location_names.map(function(location, i) {
            return <option key={i} value={location}>{location}</option>;
        });

        return (
        <div className="WeatherForm">
            <h2 className="instructions">Select the city that you want to retrieve data from below:</h2>

            <div className="dropdownContainer">
                <select id="locationSelector" onChange={this.props.locationHandler}>
                    {location_names_options}
                </select>
            </div>
            <div className="buttonContainer">
                <button onClick={this.props.weatherDataHandler}>Get Weather Data</button>
            </div>
        </div>
        );
    }
}

WeatherForm.propTypes = {
    locationHandler: PropTypes.func.isRequired,
    weatherDataHandler: PropTypes.func.isRequired
}