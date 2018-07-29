import React from 'react';

export class WeatherData extends React.Component {
    render() {
        console.log(this.props.data);
        return (
            <div id="weather_data">
                <p>Sunrise: {this.props.data.sunrise}</p>
                <p>Sunset: {this.props.data.sunset}</p>
                <p>Humidity: {this.props.data.humidity}</p>

                <p>Current Temperature: {this.props.data.current_condition.temp}</p>
                <p>{this.props.data.current_condition.text}</p>
            </div>
        );

    }
}