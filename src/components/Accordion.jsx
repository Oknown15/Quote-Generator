import React, { Component } from 'react';

class Accordion extends Component {
    render() {
        const items = ['Items', 'Items 2', 'Items 3'];
        return (
            <div>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Accordion;