import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import { WeatherForm } from './WeatherForm';


export class App extends React.Component {
	render() {
		return (
		    <div>
		        <Header/>
		        <WeatherForm/>
		    </div>
		);
	}
}
