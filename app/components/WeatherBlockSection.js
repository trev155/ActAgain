import React from 'react';
import PropTypes from 'prop-types';

export class WeatherBlockSection extends React.Component {
    /*
    A WeatherBlockSection is a visual component that contains information on a specific weather attribute.
    */
    render() {
        return (
            <div className="blockSection">
                <p className="itemName">{this.props.itemName}</p>
                <img src={this.props.itemImgPath} width={this.props.itemImgWidth} height={this.props.itemImgHeight}/>
                <p className="itemValue">{this.props.itemValue}</p>
            </div>
        );
    }
}

WeatherBlockSection.propTypes = {
    itemName: PropTypes.string.isRequired,
    itemImgPath: PropTypes.string.isRequired,
    itemImgWidth: PropTypes.string.isRequired,
    itemImgHeight: PropTypes.string.isRequired,
    itemValue: PropTypes.string.isRequired
};
