import React from 'react';
import { ConditionImage } from './ConditionImage';

export class WeatherData extends React.Component {
    render() {
        // for debugging
        // console.log("Data sent into WeatherData component:");
        // console.log(this.props.data);

        let forecasts = this.props.data.forecast;
        let forecast_data = forecasts.map(function(forecast, i) {
            return (
                <div className="blockSection" key={i}>
                    <p className="day">{forecast.day} {forecast.date}</p>
                    <ConditionImage conditionCode={forecast.code} width="50" height="50"/>
                    <p className="highlow">{forecast.low}&deg;C - {forecast.high}&deg;C</p>
                    <p className="description">{forecast.text}</p>
                </div>
            );
        });

        return (
            <div className="WeatherData">
                <div className="currentWeather">
                    <h3 className="subheader">Current Conditions for: {this.props.data.location.city}, {this.props.data.location.region}, {this.props.data.location.country}</h3>
                    <p className="dateDescriptor">Data retrieved at: {this.props.data.date_retrieved}</p>

                    <div className="blockSection">
                        <p className="itemName">Current Temperature</p>
                        <img src="/app/images/temperature.png" width="50" height="50"/>
                        <p className="itemValue">{this.props.data.current_temperature}&deg;C</p>
                    </div>
                    <div className="blockSection">
                        <p className="itemName">Conditions</p>
                        <ConditionImage conditionCode={this.props.data.current_condition_code} width="50" height="50"/>
                        <p className="itemValue">{this.props.data.current_description}</p>
                    </div>
                    <div className="blockSection">
                        <p className="itemName">Humidity</p>
                        <img src="/app/images/humidity.png" width="50" height="50"/>
                        <p className="itemValue">{this.props.data.humidity}</p>
                    </div>
                    <div className="blockSection">
                        <p className="itemName">Visibility</p>
                        <img src="/app/images/visibility.png" width="50" height="50"/>
                        <p className="itemValue">{this.props.data.visibility}</p>
                    </div>
                    <div className="blockSection">
                        <p className="itemName">Pressure</p>
                        <img src="/app/images/pressure.png" width="50" height="50"/>
                        <p className="itemValue">{this.props.data.pressure}</p>
                    </div>
                    <div className="blockSection">
                        <p className="itemName">Sunrise</p>
                        <img src="/app/images/sunrise.png" width="50" height="50"/>
                        <p className="itemValue">{this.props.data.sunrise}</p>
                    </div>
                    <div className="blockSection">
                        <p className="itemName">Sunset</p>
                        <img src="/app/images/sunset.png" width="50" height="50"/>
                        <p className="itemValue">{this.props.data.sunset}</p>
                    </div>
                    <div className="blockSection">
                        <p className="itemName">Wind Direction</p>
                        <img src="/app/images/winddirection.png" width="50" height="50"/>
                        <p className="itemValue">{this.props.data.windDirection}&deg;C</p>
                    </div>
                    <div className="blockSection">
                        <p className="itemName">Wind Speed</p>
                        <img src="/app/images/windspeed.png" width="50" height="50"/>
                        <p className="itemValue">{this.props.data.windSpeed}</p>
                    </div>
                </div>
                <div className="forecasts">
                    <h3 className="subheader">10 Day Forecast</h3>
                    {forecast_data}
                </div>
            </div>
        );
    }
}