import React from 'react';

export class Footer extends React.Component {
    render() {
        const footerStyles = {
            "border": "1px solid black",
            "background-color": "aqua",
            "margin": 0,
            "text-align": "center"
        };
        return (
        <div style={footerStyles}>
            <h2>Footer hello world</h2>
        </div>
        );
    }
}