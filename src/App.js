import React, { Component } from 'react';
import logo from './logo.svg';
import getWeath from './getWeath.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weath: '',
    }
  }

  onSubmit = () => {
    const newZip = document.getElementById('zip').value
    getWeath(newZip)
    .then(res => {
      const data = res.data
      const city = data.name
      const temp = Math.round(data.main.temp)
      const desc = data.weather[0].main
      this.setState({
        weath: `${city}: ${desc} - ${temp}F`
      })
    })
    .catch(err => {
      console.log('err', err);
      this.setState({
        weath: 'you heck\'d up'
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

            Zip Code: <input id="zip" type="text"/><br/>
            <input onClick={this.onSubmit} type="submit" value="Submit"/>
            {this.state.weath}
        </header>
      </div>
    );
  }
}

export default App;
