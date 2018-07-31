import React from 'react';
import axios from 'axios';
import { WeatherForm } from './WeatherForm';
import { WeatherData } from './WeatherData';

export class WeatherApp extends React.Component {
    /*
    Initialize state defaults and create event handler bindings.
    */
    constructor(props) {
        super(props);
        this.state = {
            location_selection: null,
            location_weather_data: null
        };
        this.handleRequestWeatherData = this.handleRequestWeatherData.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
    }

    /*
    A method for retrieving the currently selected option.
    */
    getCurrentlySelectedOption() {
        let selectElement = document.getElementById("locationSelector");
        return selectElement.options[selectElement.selectedIndex].value;
    }

    /*
    This is an event handler for getting weather data from Yahoo's Weather API.

    It will send a GET request to the current location saved in this.state.location,
    and save the fields of interest in the response into this.state.location_weather_data.
    */
    handleRequestWeatherData(e) {
        // Prepare a weather request for the current value of location_selection
        let location_name = this.state.location_selection == null ? this.getCurrentlySelectedOption() : this.state.location_selection;
        let yql = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + location_name + "') and u='c'";
        let url = "https://query.yahooapis.com/v1/public/yql?q=" + yql + "&format=json";
        url = encodeURI(url);

        // actually send the GET
        let self = this;
        axios.get(url)
            .then(function(response) {
                // log the raw response for debugging
                // console.log("Raw response")
                // console.log(response);
                console.log(response.data.query.results.channel);

                let all_data = response.data.query.results.channel;
                let weather_data = {
                    location: all_data.location,
                    date_retrieved: all_data.item.condition.date,
                    current_temperature: all_data.item.condition.temp,
                    current_description: all_data.item.condition.text,
                    humidity: all_data.atmosphere.humidity + "%",
                    visibility: all_data.atmosphere.visibility + " km",
                    pressure: all_data.atmosphere.pressure + " mb",
                    sunrise: all_data.astronomy.sunrise,
                    sunset: all_data.astronomy.sunset,
                    windDirection: all_data.wind.direction,
                    windSpeed: all_data.wind.speed + " km/h",
                    forecast: all_data.item.forecast
                }
                self.setState({location_weather_data: weather_data});
            }).catch(function (error) {
                console.log(error);
            }).then(function() {
                console.log("GET weather complete");
            });
    }

    /*
    This is an event handler that changes the current location state to the new value
    specified by e.target.value.
    */
    handleLocationChange(e) {
        const new_location = e.target.value;
        this.setState({location_selection: new_location});
    }

    /*
    Render the WeatherApp. It consists of a form, the WeatherForm, and a data section, WeatherData.
    If there is no data, only render the form.
    */
    render() {
        const isFirstPageLoad = this.state.location_weather_data == null;
        let weatherData = <WeatherData data={this.state.location_weather_data}/>;

        if (isFirstPageLoad) {
            return (
                <div className="WeatherApp">
                    <WeatherForm weatherDataHandler={this.handleRequestWeatherData} locationHandler={this.handleLocationChange}/>
                </div>
            );
        } else {
            return (
                <div className="WeatherApp">
                    <WeatherForm weatherDataHandler={this.handleRequestWeatherData} locationHandler={this.handleLocationChange}/>
                    {weatherData}
                </div>
            );
        }

    }
}