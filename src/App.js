import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state = {
      isClicked: false,
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is Caleb. I finally figured it out.
          </p>
          <p>
            Well somewhat... figured it out. Yes!!!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
}}

export default App;
