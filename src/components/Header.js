import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon">
              <i className="fas fa-user-astronaut"></i>
            </span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Dan Nate</h1>
                <p>Contract & Freelance <span className="developer"><a href="javascript:;" onClick={() => {props.onOpenArticle('people')}}>Web Developer</a></span> and <span className="designer"><a href="javascript:;" onClick={() => {props.onOpenArticle('people')}}>UX Designer</a></span><br /> on <a href="https://www.linkedin.com/in/dan-nate-4aa44215/">LinkedIN</a> and GitHub
                at <a href="https://github.com/danpatnate">danpatnate</a></p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Blog (coming soon!)</a></li>
                <li><a href="mailto:danpatnate@gmail.com">Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
