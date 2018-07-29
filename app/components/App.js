import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import { WeatherApp } from './WeatherApp';
import { Footer } from './Footer';


export class App extends React.Component {
    /*
    React can't seem to access the <body>, I style it here.
    */
    componentDidMount() {
        document.body.style.backgroundColor = "#D8CEF6";
        document.body.style.margin = "0px";
    }

	render() {
	    const weatherAppStyle = {
	        "height": "1200px",
	        "overflow": "scroll"
	    };
		return (
		    <div>
		        <Header/>
		        <div style={weatherAppStyle}>
		            <WeatherApp/>
		        </div>
		        <Footer/>
		    </div>
		);
	}
}
