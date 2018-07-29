import React from 'react';
import axios from 'axios';
import { WeatherForm } from './WeatherForm';
import { WeatherData } from './WeatherData';

export class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location_selection: "toronto",
            location_weather_data: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    /*
    This is an event handler for getting weather data from Yahoo's Weather API.

    It will send a GET request to the current location saved in this.state.location,
    and save the fields of interest in the response into this.state.location_weather_data.
    */
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
                // log the raw response for debugging
                console.log("Raw response")
                console.log(response);
                console.log(response.data.query.results.channel);

                let all_data = response.data.query.results.channel;
                let weather_data = {
                    sunrise: all_data.astronomy.sunrise,
                    sunset: all_data.astronomy.sunset,
                    humidity: all_data.atmosphere.humidity,
                    current_condition: all_data.item.condition,
                    forecast: all_data.item.forecast
                }
                self.setState({location_weather_data: weather_data});
            }).catch(function (error) {
                console.log(error);
            }).then(function() {
                console.log("GET weather complete");
            });
    }

    render() {
        // When the page first loads, this.state.location_weather_data == null, so we have no data to display yet
        if (this.state.location_weather_data == null) {
            console.log("First pass");
            return (
                <div>
                    <WeatherForm clickHandler={this.handleClick}/>
                </div>
            );
        } else {
            console.log("Rerendered app");
            return (
                <div>
                    <WeatherForm clickHandler={this.handleClick}/>
                    <WeatherData data={this.state.location_weather_data}/>
                </div>
            );
        }

    }
}