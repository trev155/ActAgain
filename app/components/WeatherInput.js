import React from 'react';

export class WeatherInput extends React.Component {
    render() {
        return (
            <div>
                <select>
                    <option value="Toronto">Toronto</option>
                    <option value="Vancouver">Vancouver</option>
                </select>
            </div>
        );
    }
}