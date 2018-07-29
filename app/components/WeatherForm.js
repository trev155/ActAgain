import React from 'react';

export class WeatherForm extends React.Component {
    render() {
        const selectionStyle = {
            "display": "block",
            "border-radius": "5px"
        };
        const buttonStyle = {
            "display": "block",
            "background-color": "#AAB189"
        };

        let location_names = ["Toronto", "Vancouver", "Calgary", "Montreal", "Ottawa", "Edmonton", "Halifax", "Winnipeg"];
        let location_names_options = location_names.map(function(location, i) {
            return <option key={i} value={location}>{location}</option>;
        });

        return (
        <div>
            <h2>Select the city that you want to retrieve data from below:</h2>

            <select onChange={this.props.locationHandler} style={selectionStyle}>
                {location_names_options}
            </select>

            <button onClick={this.props.weatherDataHandler} style={buttonStyle}>Get Weather Data</button>
        </div>
        );
    }
}