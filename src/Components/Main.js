import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Social, Background, Projects, AboutMe, TypingIntro } from '../Components'

export default class Main extends Component {
  render() {
    let mobile = window.innerWidth <= 600
    let iconSize = `massive`
    if (mobile) {
      iconSize = `huge`
    }
    return (
      <div id="MainView" className="bg-Overlay animated fadeIn">
        <div id="typingContainer">
          <TypingIntro />
          <div className="animated infinite pulse delay-2s"><Icon name="angle double down" size={iconSize} style={{ opacity: 0.5 }} /></div>
        </div>
        <AboutMe />
        <Projects />
        <Background />
        <Social />
      </div>

    )
  }
}