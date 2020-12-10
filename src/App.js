import React, { Component } from 'react';
import './App.css';
import { ConsoleWindow, NavBar, Main } from './Components';


class App extends Component {
  constructor() {
    super()
    this.state = {
      mobileView: window.innerWidth <= 600,
      mainLoad: false
    }
  }
  componentDidMount() {
    document.getElementById(`console-window`).style.animation = `fadein 2s forwards`
  }
  resize = () => {
    this.setState({ mobileView: window.innerWidth <= 600 });
  }
  newState() {
    this.setState({ mainLoad: true });
  }
  render() {
    return (
      <div className="App">
        <ConsoleWindow resize={this.resize} mobile={this.state.mobileView} newState={this.newState.bind(this)} />
        <NavBar load={this.state.mainLoad} mobile={this.state.mobileView} mobileView={this.state.mobileView} />
        {this.state.mainLoad &&
          <Main />
        }
        <div id="bg-gifOverlay"><img alt="BGGif" id="bg-gif" src={require(`./imgs/BGGif.gif`)} /></div>
      </div>
    );
  }
}

export default App;
