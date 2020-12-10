import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Social extends Component {
  render() {
    return (
      <div className="subView">
        <div id="Social">
          <ScrollAnimation animateIn='flipInX'
            animateOut='flipOutY'>
            <div className="sectionTitle"><a>Social</a></div>
          </ScrollAnimation>
          <div id="SocialCards">
            <div className="card">
              <h1>LinkedIn</h1>
              <a href="https://linkedin.com/in/knthslai" target="_blank" rel="noopener noreferrer" ><img alt="linkedIn.png" src={require(`../imgs/LinkedIn.png`)} /></a>
            </div>
            <div className="card">
              <h1>Github</h1>
              <a href="https://github.com/knthslai" target="_blank" rel="noopener noreferrer"><img alt="Github.png" src={require(`../imgs/Github.png`)} /></a>
            </div>
            <div className="card">
              <h1>Contact</h1>
              <div className="cardLine">
                <h2>Mobile: </h2> <a href="tel:+16468532228">{`(646) 853-2228`}</a>
              </div>
              <div className="cardLine">
                <h2>E-mail: </h2> <a href="mailto:knthslai@gmail.com">Knthslai@gmail.com</a>
              </div>
              <div className="cardLine">
                <h2>Résumé: </h2> <a href="https://github.com/knthslai/profile/blob/master/src/imgs/Kenneth-Lai-Resume.pdf" target="_blank" rel="noopener noreferrer">Click here for resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}