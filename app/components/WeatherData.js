import React from 'react';

export class WeatherData extends React.Component {
    render() {
        // for debugging
        console.log("Data sent into WeatherData component:");
        console.log(this.props.data);

        let forecasts = this.props.data.forecast;
        let forecast_data = forecasts.map(function(forecast, i) {
            return (
                <div className="forecast-block" key={i}>
                    <p>Date: {forecast.date}</p>
                    <p>Day: {forecast.day}</p>
                    <p>High: {forecast.high}</p>
                    <p>Low: {forecast.low}</p>
                    <p>{forecast.text}</p>
                </div>
            );
        });

        return (
            <div className="WeatherData">
                <p>Sunrise: {this.props.data.sunrise}</p>
                <p>Sunset: {this.props.data.sunset}</p>
                <p>Humidity: {this.props.data.humidity}</p>

                <p>Current Temperature: {this.props.data.current_condition.temp}</p>
                <p>{this.props.data.current_condition.text}</p>

                <div className="forecasts">
                    <h3>10 Day Forecast</h3>
                    <ul>
                        {forecast_data}
                    </ul>
                </div>
            </div>
        );
    }
}