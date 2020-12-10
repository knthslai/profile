import React, { Component } from 'react';
import Typing, { Backspace, Delay } from 'react-typing-animation';
export default class TypingIntro extends Component {
  constructor() {
    super()
    this.state = {
      load: false
    }
  }
  render() {
    if (this.state.load) {
      return (
        <Typing id="typing-Intro" className="main-typing" loop={true} speed={35}>
          Start by
{[`scrolling down`, `clicking on the menu`, `connecting on LinkedIn`, `emailing me`].map((str) => {
            return (
              <React.Fragment key={str}>
                {` ${str}`}
                <Backspace delay={5000} count={str.length} />
              </React.Fragment>
            )

          })}
        </Typing>)
    }
    else {
      return (
        <Typing id="typing-Intro" className="main-typing" loop={false} speed={25} startDelay={2000} onFinishedTyping={() => this.setState({ load: true })}>
          My name is Kenneth Lai
            <Backspace delay={2000} count={22} speed={15} />
          I am a Programmer
          <Backspace delay={2000} count={10} speed={15} />
          Tech Guru
          <Backspace delay={1800} count={9} speed={15} />
          Photographer
          <Backspace delay={1600} count={12} speed={15} />
          Hip-hop Dancer
          <Backspace delay={1400} count={25} speed={15} />
          Welcome to my personal website!
          <Delay ms={4000} />
        </Typing>
      )
    }
  }
}