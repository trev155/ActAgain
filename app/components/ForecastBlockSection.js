import React from 'react';
import PropTypes from 'prop-types';
import { ConditionImage } from './ConditionImage';

export class ForecastBlockSection extends React.Component {
    /*
    A ForecastBlockSection represents a single day of the 10 Day Forecast. It will display data such as:
    - date
    - image
    - low / high temperatures
    - descriptor
    */
    render() {
        return (
            <div className="blockSection">
                <p className="day">{this.props.dateString}</p>
                <ConditionImage conditionCode={this.props.conditionCode} width={this.props.imgWidth} height={this.props.imgHeight}/>
                <p className="lowhigh">{this.props.lowhighString}</p>
                <p className="description">{this.props.descriptor}</p>
            </div>
        );
    }
}

ForecastBlockSection.propTypes = {
    dateString: PropTypes.string.isRequired,
    conditionCode: PropTypes.string.isRequired,
    imgWidth: PropTypes.string.isRequired,
    imgHeight: PropTypes.string.isRequired,
    lowHighString: PropTypes.string.isRequired,
    descriptor: PropTypes.string.isRequired
}