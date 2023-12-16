import React, { Component } from 'react';

class welcome extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            userInput : "",
            toDolist : []
        };
        <button>change code</button>

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDolist: itemsArray
        });
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }
    render() {
        const items = this.state.toDolist.map(i => <li>{i}</li> );
        return (
            <div className='container'>
                <textarea onChange={this.handleChange}
                value={this.state.userInput}
                placeholder='seperate all them manhdem'></textarea>
                <br/>
                <button onClick={this.handleSubmit}>create account</button>
                <ul>{items}</ul>
            </div>
        );
    }
}

export default welcome;