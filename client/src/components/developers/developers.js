import React, { Component } from 'react';
import './developers.css';

class Developers extends Component {
    constructor() {
        super();
        this.state = {
            developers: []
        }
    }

    componentDidMount(){
        fetch('/api/developers')
            .then(res => res.json())
            .then(developers => this.setState({developers}, () => console.log('Developers fetched ', developers )));
    }

  render() {
    return (
      <div>
        <h2>Developers</h2>

        <ul>
            {this.state.developers.map( developer =>
                <li key={developer.id}>{ developer.firstName } { developer.lastName }</li>
            )}
        </ul>
      </div>
    );
  }
}

export default Developers;
