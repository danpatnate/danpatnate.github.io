import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <a href="https://www.instagram.com/dannynate/">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=1168800048">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/in/dan-nate-4aa44215/">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/danpatnate">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/dannatepaint/">
          <i class="fas fa-palette"></i>
        </a>
        <a href="mailto:danpatnate@gmail.com">
          <i class="far fa-envelope"></i>
        </a>
        <p className="copyright">&copy; Nate - Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
