import React from 'react';

export class WeatherData extends React.Component {
    render() {
        // for debugging
        console.log("Data sent into WeatherData component:");
        console.log(this.props.data);

        let forecasts = this.props.data.forecast;
        let forecast_data = forecasts.map(function(forecast, i) {
            return (
                <div className="forecastBlock" key={i}>
                    <p>{forecast.date}</p>
                    <p>Day: {forecast.day}</p>
                    <p>Low: {forecast.low}</p>
                    <p>High: {forecast.high}</p>
                    <p>{forecast.text}</p>
                </div>
            );
        });

        return (
            <div className="WeatherData">
                <div className="CurrentWeather">
                    <p className="subheader">Current Conditions for: {this.props.data.location.city}, {this.props.data.location.region}, {this.props.data.location.country}</p>
                    <div className="blockSection">
                        <p>Sunrise</p>
                        <img src="/app/images/sunrise.png" width="50" height="50"/>
                        <p>{this.props.data.sunrise}</p>
                    </div>
                    <div className="blockSection">
                        <p>Sunset</p>
                        <img src="/app/images/sunset.png" width="50" height="50"/>
                        <p>{this.props.data.sunset}</p>
                    </div>
                    <div className="blockSection">
                        <p>Humidity</p>
                        <img src="/app/images/humidity.png" width="50" height="50"/>
                        <p>{this.props.data.humidity}</p>
                    </div>
                    <div className="blockSection">
                        <p>Current Temperature</p>
                        <img src="/app/images/temperature.png" width="50" height="50"/>
                        <p>{this.props.data.current_condition.temp}&deg;C</p>
                    </div>
                    <div className="blockSection">
                        <p>Conditions</p>
                        <p>{this.props.data.current_condition.text}</p>
                    </div>
                </div>

                <div className="forecasts">
                    <h3>10 Day Forecast</h3>
                    {forecast_data}
                </div>
            </div>
        );
    }
}