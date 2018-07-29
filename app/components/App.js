import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import { WeatherApp } from './WeatherApp';
import { Footer } from './Footer';


export class App extends React.Component {
	render() {
		return (
		    <div id="app">
		        <Header/>
		        <WeatherApp/>
		        <Footer/>
		    </div>
		);
	}
}
