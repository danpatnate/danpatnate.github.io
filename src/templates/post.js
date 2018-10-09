import React from 'react';
import Helmet from 'react-helmet';

import '../assets/scss/main.scss'

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <div className="blog-container">
      <div className="blog-content">
        <h3>{post.frontmatter.title}</h3>
        <p dangerouslySetInnerHTML={{__html: post.html }} />
        <code>jasdhvalkjfh</code>
      </div>
    </div>
  )
}

export const postQUERY = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
