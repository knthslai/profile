import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import anime from "animejs"
export default class NavBar extends Component {
  preLoadOutMenu = () => {
    let inUse = false
    return () => {
      const menuBtnRef = document.getElementById(`navIcon`)
      if (this.props.mobile && this.props.load && !inUse) {
        inUse = true
        let time = 0
        const timeline = anime.timeline({ easing: `easeInOutCirc`, })
        const timelineOptions = {
          translateY: 185,
          duration: 1000,
          offset: time
        }
        menuBtnRef.style.backgroundColor = `gray`
        timelineOptions.translateX = [{ value: 275 }]
        timelineOptions.translateY = [{ value: 15 }]



        for (let j = 1; j < 5; j++) {
          timelineOptions.targets = `.nav-item.slide${j}`
          timeline.add(timelineOptions)
          timelineOptions.offset += 250
        }
        setTimeout(() => {
          const timeline = anime.timeline({ easing: `easeInOutCirc`, })
          time = 0
          timelineOptions.translateX = [{ value: 275 }]
          timelineOptions.translateY = [{ value: -225 }]
          for (let j = 1; j < 5; j++) {
            timelineOptions.targets = `.nav-item.slide${j}`
            timeline.add(timelineOptions)
            timelineOptions.offset += 250
          }
          setTimeout(() => {
            menuBtnRef.style.backgroundColor = `black`
            inUse = false
          }, 3000);
        }, 5000)
      }
    }
  }
  handleClick = (div) => {
    if (this.props.load) {
      document.getElementById(div).scrollIntoView({ behavior: `smooth`, block: `start` })
    }
  }
  render() {
    const loadOutMenu = this.preLoadOutMenu()
    return (
      <div id="nav-Bar" >

        <Icon id="navIcon" name="align justify" size="large" className="nav-item" onClick={loadOutMenu}><h3 style={{ paddingLeft: `10px` }}> - Menu </h3></Icon >

        <div id="about-Me" className="nav-item" onClick={() => this.handleClick(`AboutMe`)}>
          <h2>About Me</h2>
          <a style={{ backgroundColor: `transparent` }}> How I became a programmer. I found my passion through...</a>
        </div>
        <div id="projects" className="nav-item" onClick={() => this.handleClick(`Projects`)}>
          <h2>Projects</h2>
          <a style={{ backgroundColor: `transparent` }}> Proud to say I worked on these projects!
          </a>
        </div>
        <div id="background" className="nav-item" onClick={() => this.handleClick(`Background`)}>
          <h2>Background</h2>
          <a style={{ backgroundColor: `transparent` }}> Working in NYC has taught me valuable and transferable skills!
          </a>
        </div>
        <div id="social" className="nav-item" onClick={() => this.handleClick(`Social`)}>
          <h2>Social</h2>
          <a style={{ backgroundColor: `transparent` }}>Let's connect through Linkedin, Github, or E-Mail!</a>
        </div>
      </div>
    )
  }
}