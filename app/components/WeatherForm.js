import React from 'react';

export class WeatherForm extends React.Component {
    render() {
        let location_names = ["Toronto", "Vancouver", "Calgary", "Montreal", "Ottawa", "Edmonton", "Halifax", "Winnipeg"];
        let location_names_options = location_names.map(function(location, i) {
            return <option key={i} value={location}>{location}</option>;
        });

        return (
        <div className="WeatherForm">
            <h2 className="instructions">Select the city that you want to retrieve data from below:</h2>

            <div className="dropdownContainer">
                <select onChange={this.props.locationHandler}>
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