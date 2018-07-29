import React from 'react';

export class WeatherForm extends React.Component {
    render() {
        return (
        <div>
            <h2>Weather Form</h2>

            <select onChange={this.props.locationHandler}>
                <option value="Toronto">Toronto</option>
                <option value="Vancouver">Vancouver</option>
            </select>

            <button onClick={this.props.clickHandler}>Get Weather Data</button>
        </div>
        );
    }
}