import React from 'react';

export class ConditionImage extends React.Component {
    /*
    Given a condition code (see: https://developer.yahoo.com/weather/archive.html#image), return the path
    to the corresponding image file that I want to use.
    */
    codeConverter(code) {
        const imgPrefix = "/app/images/";
        const mappings = {
            "0": "cc_tornado.png",
            "1": "cc_tornado.png",
            "2": "cc_tornado.png",
            "3": "cc_thunderstorm.png",
            "4": "cc_thunderstorm.png",
            "5": "cc_rainsnow.png",
            "6": "cc_rainsnow.png",
            "7": "cc_rainsnow.png",
            "8": "cc_drizzle.png",
            "9": "cc_drizzle.png",
            "10": "cc_freezingrain.png",
            "11": "cc_rain.png",
            "12": "cc_rain.png",
            "13": "cc_snow.png",
            "14": "cc_snow.png",
            "15": "cc_snow.png",
            "16": "cc_snow.png",
            "17": "cc_hail.png",
            "18": "cc_hail.png",
            "19": "cc_fog.jpg",
            "20": "cc_fog.jpg",
            "21": "cc_fog.jpg",
            "22": "cc_fog.jpg",
            "23": "cc_fog.jpg",
            "24": "cc_windy.png",
            "25": "cc_windy.png",
            "26": "cc_cloudy.png",
            "27": "cc_partlycloudy.png",
            "28": "cc_partlycloudy.png",
            "29": "cc_partlycloudy.png",
            "30": "cc_partlycloudy.png",
            "31": "cc_clearnight.jpg",
            "32": "cc_sunny.png",
            "33": "cc_sunny.png",
            "34": "cc_sunny.png",
            "35": "cc_rainsnow.png",
            "36": "cc_sunny.png",
            "37": "cc_scatteredthunderstorms.png",
            "38": "cc_scatteredthunderstorms.png",
            "39": "cc_scatteredthunderstorms.png",
            "40": "cc_scatteredshowers.png",
            "41": "cc_snow.png",
            "42": "cc_rainsnow.png",
            "43": "cc_snow.png",
            "44": "cc_partlycloudy.png",
            "45": "cc_thunderstorm.png",
            "46": "cc_rainsnow.png",
            "47": "cc_scatteredthunderstorms.png",
            "3200": "placeholder.png"
        };
        let fileName;
        if (!mappings.hasOwnProperty(code)) {
            fileName = "placeholder.png";
        } else {
            fileName = mappings[code];
        }

        let imgPath = imgPrefix + fileName;
        return imgPath;
    }

    render() {
        let imgPath = this.codeConverter(this.props.conditionCode);
        return <img src={imgPath} width={this.props.width} height={this.props.height}/>;
    }
}