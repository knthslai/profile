import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import TypingInput from './Typing';
import anime from "animejs"
import Typing from 'react-typing-animation/dist/Typing';


class ConsoleWindow extends Component {
  constructor() {
    super()
    this.state = {
      secretNum: Math.random(9) * Date.now(),
    }
  }
  componentDidMount() {
    const resize = this.resizePre()
    window.addEventListener(`resize`, () => {
      resize()
    });
  }
  resizePre = () => {
    let resizeBool = true
    return () => {
      if (resizeBool) {
        this.props.resize()
        this.preSubmitMessage(`Load nav-item:Top`)
        resizeBool = false;
        setTimeout(() => {
          resizeBool = true
        }, 2000)
      }
    }
  }
  addTypingEventListener = (submitMessage) => {
    document.addEventListener(`keydown`, evt => {
      const inputField = document.getElementById(`input-Field`)

      if (inputField) {
        inputField.style.whiteSpace = `pre-wrap`
        const innerText = inputField.innerText

        if (evt.code.includes(`Key`) || evt.code === `Space`) {
          inputField.innerText += evt.key
        } else {

          switch (evt.code) {
            case `Backspace`:
              inputField.innerText = innerText.slice(0, -1)
              break
            case `Enter`:
              inputField.innerText = ``
              submitMessage(innerText)
              break
            default:
              break
          }
        }
      }
    })
  }

  preSubmitMessage = (str) => {
    // let waiting = false
    const secretNum = this.state.secretNum
    const newState = this.props.newState
    const mobileView = this.props.mobile
    const consWin = document.getElementById(`console-window`)
    const consoleRef = document.getElementById(`console-display`)
    const newStr = document.createElement(`div`);

    let inputStr = str
    if (str === secretNum) {
      inputStr = `---Loaded Successfully---`
      newStr.style.color = `lightgreen`

      setTimeout(() => {
        newState({ mainLoad: true })
        consWin.style.animation = `fadeout 2s forwards`
      }, 3000)

      // addWaitingLine(3000)
      // waiting = true
    } else {
      // if (waiting) {
      //   document.getElementById(`waiting-Text`).remove()
      //   addWaitingLine(5000)
      //   waiting = false
      //   //Loading Content
      // } else 
      if (inputStr.slice(0, 4) === `Load`) {
        const divId = inputStr.slice(5)
        const splitIdx = divId.indexOf(`:`)
        const divName = divId.slice(0, splitIdx)
        const direction = divId.slice(splitIdx + 1)
        inputStr = `Loading: ${divName} ...`
        switch (divName) {
          case `nav-item`:
            const nodeList = document.getElementsByClassName(divName)
            let i
            for (i = 0; i < nodeList.length; i++) {
              nodeList[i].classList.add(`slide${i}`)
              if (mobileView) {
                nodeList[i].childNodes.forEach((node, idx) => idx ? node.remove() : null)
              }
            }
            let time = 0
            const timeline = anime.timeline({
              easing: `easeInOutCirc`,
              complete: () => {
                document.querySelectorAll(`.nav-item *`).forEach(node => {
                  node.style.transition = `0.3s`
                })
              }
            })
            let startIdx = 0
            if (mobileView) {
              timeline.add({
                targets: `.nav-item.slide0`,
                translateX: 225,
                duration: 2000,
                offset: time
              })
              time += 1000
              startIdx += 1
            }
            const timelineOptions = {
              translateY: 185,
              duration: 3000,
              offset: time
            }
            if (window.innerHeight <= 375) {
              timelineOptions.translateY = 145
            }
            if (mobileView) {
              timelineOptions.translateX = [{ value: 275 }, { value: 275 }]
              timelineOptions.translateY = [{ value: 0 }, { value: -300 }]
            }
            for (let j = startIdx; j < i; j++) {
              timelineOptions.targets = `.nav-item.slide${j}`
              timeline.add(timelineOptions)
              timelineOptions.offset += 1000
            }


            break
          case `bg-gif`:
            const bgRef = document.getElementById(`bg-gif`)
            bgRef.classList.add(`slide${direction}`)
            setTimeout(() => {
              bgRef.style.opacity = `0.5`
              bgRef.classList.remove(`slide${direction}`)
            }, 3000)
            break
          default:
            break
        }
        setTimeout(() => {
          document.getElementById(str).innerText += ` Complete`
        }, 1000)

      }
      newStr.style.color = `rgb(255, 255, 116)`
    }

    newStr.id = str
    newStr.appendChild(document.createTextNode(`> ${inputStr}`))
    consoleRef.appendChild(newStr)

    setTimeout(() => {
      const textEntry = document.getElementById(str)
      if (textEntry) {
        textEntry.remove()
      }
    }, 10000)

    // function addWaitingLine(time) {
    //   setTimeout(() => {
    //     const waitingStr = document.createElement(`div`);
    //     waitingStr.appendChild(document.createTextNode(`> Waiting for user input...`))
    //     waitingStr.style.color = `lightblue`
    //     waitingStr.id = `waiting-Text`
    //     consoleRef.appendChild(waitingStr)
    //   }, time)
    // }

  }

  render() {
    return (
      <div id="console-window">
        <div id="console-header"><h3> Console </h3><Icon name="window close outline" size="large" /></div>
        <div id="console-display" >
          <Typing speed={15}>{`Starting terminal on: ${new Date().toLocaleString(`en-US`, {
            weekday: `long`,
            month: `long`,
            day: `numeric`,
            hour: `numeric`,
            minute: `numeric`,
            formatMatcher: `best fit`
          })}`}</Typing>
        </div>
        <div id="console-input">
          <TypingInput secretNum={this.state.secretNum} submitMessage={this.preSubmitMessage} />
        </div>
      </div >
    )
  }
}
export default ConsoleWindow