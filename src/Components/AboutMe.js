import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import textComponent from "./TextComponents"

export default class AboutMe extends Component {
  render() {
    return (
      <div className="subView">
        <div id="AboutMe">
          <ScrollAnimation animateIn='flipInX'
            animateOnce={true}>
            <div className="sectionTitle"><a>About me </a></div>
          </ScrollAnimation>
          {textComponent.aboutMe.map((ele, idx) => {
            let direction = `Left`
            if (idx % 2 === 0) direction = `Right`
            let text = ele.text.split(`.`)
            return (
              <ScrollAnimation className={`textBox${direction}`} key={idx}
                animateIn={`fadeIn${direction}Big`}
                animateOnce={true}
              ><div className="imgColumn">
                  <img alt={ele.img[0]} src={require(`../imgs/${ele.img[0]}`)} /></div>
                <div className="textColumn">
                  <h1>{ele.header}</h1>
                  {
                    text.map((txt, idx) => {
                      if (txt.length) {
                        return (
                          <p key={idx}>
                            {txt}.
                        <br />
                          </p>
                        )
                      } else {
                        return null
                      }
                    })
                  }
                </div>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    )
  }
}