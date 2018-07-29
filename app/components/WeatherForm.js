import React from 'react';
import { WeatherInput } from './WeatherInput';


export class WeatherForm extends React.Component {
    render() {
        return (
        <div>
            <h2>Weather Form</h2>
            <WeatherInput/>
            <button onClick={this.props.clickHandler}>Click Me</button>
        </div>
        );
    }
}