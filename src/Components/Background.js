import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import textComponent from "./TextComponents"

export default class Background extends Component {
  render() {
    return (
      <div className="subView">
        <div id="Background">
          <ScrollAnimation animateIn='flipInX'
            animateOnce={true}>
            <div className="sectionTitle"><a>Background</a></div>
          </ScrollAnimation>
          {textComponent.background.map((project, idx) => {
            return (
              <div key={idx} className="projectSection">
                <div className="backgroundInfo">
                  <ScrollAnimation className="backgroundSection" animateIn="fadeIn" animateOnce={true}>
                    {
                      Object.keys(project).map(key => {
                        let para = project[key]
                        if (![`duties`, `business`].includes(key)) {
                          return (
                            <ScrollAnimation key={key} animateIn="fadeIn"
                              animateOnce={true}>
                              <div className="projectLine" >
                                <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                                <p>{para}</p>
                              </div>
                            </ScrollAnimation>
                          )
                        } else {
                          return null;
                        }
                      })
                    }
                  </ScrollAnimation>
                  {project.business &&
                    <ScrollAnimation key="Business" animateIn="fadeIn"
                      animateOnce={true}>
                      <div className="projectLine" >
                        <h2>Business</h2>
                        <p>{project.business}</p>
                      </div>
                    </ScrollAnimation>}
                  <ScrollAnimation key="duties" animateIn="fadeIn"
                    animateOnce={true}>
                    <div className="projectLine" >
                      <h2>Duties</h2>
                      <p>{project.duties.split(`.`).map(line => {
                        if (line.length) {
                          return (
                            <span key={line}>- {line} < br />< br /></span>)
                        } else {
                          return null;
                        }
                      })}</p>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}