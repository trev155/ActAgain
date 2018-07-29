import React from 'react';
import axios from 'axios';
import { WeatherInput } from './WeatherInput';


export class WeatherForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location_selection: "toronto",
            location_weather_data: {}
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // Prepare a weather request for the current value of location_selection
        let location = this.state.location_selection;
        let yql = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + location + "') and u='c'";
        let url = "https://query.yahooapis.com/v1/public/yql?q=" + yql + "&format=json";
        url = encodeURI(url);

        // actually send the GET
        let self = this;
        axios.get(url)
            .then(function(response) {
                // console.log(response);
                let all_data = response.data.query.results.channel;
                let weather_data = {
                    sunrise: all_data.astronomy.sunrise,
                    sunset: all_data.astronomy.sunset,
                    humidity: all_data.atmosphere.humidity
                }
                self.setState({location_weather_data: weather_data});
            });
    }

    render() {
        return (
        <div>
            <h2>Weather Form</h2>
            <button onClick={this.handleClick}>Click Me</button>
            <div>
                <p>Sunrise: {this.state.location_weather_data.sunrise}</p>
                <p>Sunset: {this.state.location_weather_data.sunset}</p>
                <p>Humidity: {this.state.location_weather_data.humidity}</p>
             </div>
            <WeatherInput/>
        </div>
        );
    }
}