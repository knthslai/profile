import React, { Component } from 'react';
import Typing, { Delay, Reset } from 'react-typing-animation'
import textComponent from "./TextComponents"

export default class TypingInput extends Component {
  constructor() {
    super()
    this.state = {
      arrInput: [...textComponent.inputs],
      loading: true
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <Typing key={1} className="console-typing" loop={true} speed={35} startDelay={1250} onFinishedTyping={() => {
          const arrInput = [...this.state.arrInput]
          const lengthInput = this.state.arrInput.length
          if (lengthInput > 1) {
            this.props.submitMessage(arrInput.shift())
            this.setState({ arrInput })
          } else if (lengthInput === 1) {
            this.props.submitMessage(arrInput[0])
            setTimeout(() => this.props.submitMessage(this.props.secretNum), 1000)
            this.setState({ loading: false })
          }
        }}>
          {this.state.arrInput[0]}
          <Delay ms={1000} />
          <Reset count={1} />
        </Typing >
      )
    } else {
      return (
        <div id="user-Input" >
          <div id="input-Field" />
          <div className="blinking-cursor">|</div>
        </div>
      )
    }
  }
}