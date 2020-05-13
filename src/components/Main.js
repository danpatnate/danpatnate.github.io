import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/interest.jpg'
import pic02 from '../images/mio.jpg'
import pic03 from '../images/green_sharp.jpg'
import accenture from '../images/acn2.png'


class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>
            Helping teams work thru the evolving application development space.
            I'll drive the production of value thru code and consulting.
          </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Software engineer for Fortune 500 companies and start-ups. Focusing in the high-tech, health, and arts industries. Skilled in Frontend Development, Web Design, Wireframing, UX Design, and Project Management.</p>
          {close}
        </article>

        <article id="about" className={`blog ${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Blog</h2>
          <span className="image main" style={{}}>
            <div style={{display: 'flex'}}>
              <img src={pic03} alt="Me - Dan" />
              <div>
                <div className="listing">
                  <i class="fas fa-coffee"></i><a href="/go-remote">Why remote work works!</a>
                </div>
                <div className="listing">
                  <i class="fas fa-angle-right"></i><a href="/go-remote">Coding and painting??</a>
                </div>
                <div className="listing">
                  <i class="fas fa-paint-brush"></i><a href="/go-remote">Finding work</a>
                </div>
                <div className="listing">
                  <i class="fas fa-angle-right"></i><a href="/go-remote">Learning and more learning</a>
                </div>
              </div>
            </div>
          </span>
          {close}
        </article>
        <article id="about" className={`${this.props.article === 'people' ? 'active wh' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">People I've worked with</h2>
          <span className="image main" style={{}}>
            <img src={accenture} alt="accenture" />
            <div></div>
          </span>
          {close}
        </article>

        <h2 className={`${this.props.article !== 'about' ? 'contact active' : 'contact'}`}><a href="mailto:danpatnate@gmail.com">Contact me</a></h2>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
