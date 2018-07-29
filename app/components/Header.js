import React from 'react';

export class Header extends React.Component {
    render() {
        const headerStyles = {
            "border": "1px solid black",
            "background-color": "aqua",
            "margin": 0,
            "text-align": "center"
        };
        return (
        <div style={headerStyles}>
            <h1>HELLO WORLD APP HEADER</h1>
        </div>
        );
    }
}