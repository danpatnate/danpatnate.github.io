import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'


class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render () {
    let content;

    if (this.props.location && this.props.location.pathname === '/') {
      content = (
        <div>
          {this.props.children}
        </div>
      )
    } else {
      content = (
        <div id="wrapper" className="page">
          <div>
            {this.props.children}
          </div>
        </div>
      )
    }

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Dan Nate - Web Developer' },
                { name: 'keywords', content: 'freelance, contractor, contract, web design, web developer, js, javascript, react' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            {content}
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object
}

export default Layout
