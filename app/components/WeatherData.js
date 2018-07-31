import React from 'react';
import PropTypes from 'prop-types';
import { ConditionImage } from './ConditionImage';
import { WeatherBlockSection } from './WeatherBlockSection';
import { ForecastBlockSection } from './ForecastBlockSection';

export class WeatherData extends React.Component {
    render() {
        // for debugging
        // console.log("Data sent into WeatherData component:");
        // console.log(this.props.data);

        let forecasts = this.props.data.forecast;
        let forecast_data = forecasts.map(function(forecast, i) {
            return (
                <ForecastBlockSection key={i} dateString={forecast.day + " " + forecast.date} conditionCode={forecast.code}
                imgWidth="50" imgHeight="50" lowHighString={forecast.low + "\xB0C - " + forecast.high + "\xB0C"} descriptor={forecast.text}/>
            );
        });

        return (
            <div className="WeatherData">
                <div className="currentWeather">
                    <h3 className="subheader">Current Conditions for: {this.props.data.location.city}, {this.props.data.location.region}, {this.props.data.location.country}</h3>
                    <p className="dateDescriptor">Data retrieved at: {this.props.data.date_retrieved}</p>
                    <WeatherBlockSection itemName="Current Temperature" itemImgPath="/app/images/temperature.png" itemImgWidth="50" itemImgHeight="50" itemValue={this.props.data.current_temperature + "\xB0C"}/>
                    <WeatherBlockSection itemName="Conditions" itemImgPath={ConditionImage.codeConverter(this.props.data.current_condition_code)} itemImgWidth="50" itemImgHeight="50" itemValue={this.props.data.current_description}/>
                    <WeatherBlockSection itemName="Humidity" itemImgPath="/app/images/humidity.png" itemImgWidth="50" itemImgHeight="50" itemValue={this.props.data.humidity}/>
                    <WeatherBlockSection itemName="Visibility" itemImgPath="/app/images/visibility.png" itemImgWidth="50" itemImgHeight="50" itemValue={this.props.data.visibility}/>
                    <WeatherBlockSection itemName="Pressure" itemImgPath="/app/images/pressure.png" itemImgWidth="50" itemImgHeight="50" itemValue={this.props.data.pressure}/>
                    <WeatherBlockSection itemName="Sunrise" itemImgPath="/app/images/sunrise.png" itemImgWidth="50" itemImgHeight="50" itemValue={this.props.data.sunrise}/>
                    <WeatherBlockSection itemName="Sunset" itemImgPath="/app/images/sunset.png" itemImgWidth="50" itemImgHeight="50" itemValue={this.props.data.sunset}/>
                    <WeatherBlockSection itemName="Wind Direction" itemImgPath="/app/images/winddirection.png" itemImgWidth="50" itemImgHeight="50" itemValue={this.props.data.windDirection + "\xB0C"}/>
                    <WeatherBlockSection itemName="Wind Speed" itemImgPath="/app/images/windspeed.png" itemImgWidth="50" itemImgHeight="50" itemValue={this.props.data.windSpeed}/>
                </div>
                <div className="forecasts">
                    <h3 className="subheader">10 Day Forecast</h3>
                    {forecast_data}
                </div>
            </div>
        );
    }
}

WeatherData.propTypes = {
    data: PropTypes.object.isRequired
}