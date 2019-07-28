import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/interest.jpg'
import pic02 from '../images/mio.jpg'
import pic03 from '../images/green_sharp.jpg'

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

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Blog</h2>
          <span className="image main" style={{}}>
            <img src={pic03} style={{ 'width': '35%' }} alt="Me - Dan" />
            <div>Coming soon!</div>
          </span>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major"><a href="mailto:danpatnate@gmail.com">Contact me</a></h2>
          // <form method="post" action="#" name="contact" data-netlify="true" netlify>
          //   <div className="field half first">
          //     <label htmlFor="name">Name</label>
          //     <input type="text" name="name" id="name" />
          //   </div>
          //   <div className="field half">
          //     <label htmlFor="email">Email</label>
          //     <input type="text" name="email" id="email" />
          //   </div>
          //   <div className="field">
          //     <label htmlFor="message">Message</label>
          //     <textarea name="message" id="message" rows="4"></textarea>
          //   </div>
          //   <ul className="actions">
          //     <li><input type="submit" value="Send Message" className="special" /></li>
          //     <li><input type="reset" value="Reset" /></li>
          //   </ul>
          // </form>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/dan-nate-4aa44215/" className="icon-contact"><i className="fab fa-linkedin-in"></i><span className="label"></span></a></li>
            {/*<li><a href="https://instagram.com/dannynate/" className="icon-contact"><i className="fab fa-instagram"></i><span className="label"></span></a></li>
            <li><a href="https://github.com/danpatnate" className="icon-contact"><i className="fab fa-github"></i><span className="label"></span></a></li>
          */}</ul>
          {close}
        </article>

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
