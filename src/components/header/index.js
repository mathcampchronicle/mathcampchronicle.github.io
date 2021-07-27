import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import logo from '../../resources/li-logo.jpg'

// query the available Pages, and create he navigation bar in the header (exclude "Home")
const renderNavItems = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        allPublications(filter: {publication: {systemdata: {contentType: {eq: "page"}}}}) {
          edges {
            node {
              extra {
                slug
              }
              publication {
                metadata {
                  title
                }
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allPublications.edges.map(
        page =>
          page.node.publication.metadata.title !== 'Home' && (
            <div className="main-nav__item" key={page.node.extra.slug}>
              <Link to={"/"+page.node.extra.slug} activeStyle={{fontWeight: 'bold'}}>
                {page.node.publication.metadata.title}
              </Link>
            </div>
          )
      )
    }
  />
)

const Header = props => (
  <header className="page-head" role="banner" style={{marginBottom: '0px'}}>
<script type="text/javascript" dangerouslySetInnerHTML= {{ __html: `window.MathJax = { tex: {inlineMath: [['$', '$'], ['\\\\(', '\\\\)']]}};`}} />
<script id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/tex-mml-chtml.js">
</script>
    <div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="tagline" style={{fontSize: '30px', fontFamily: 'Times New Roman, serif'}}>
	<center>
	MATHCAMP'S BEST —AND ONLY— NEWSPAPER
	</center>
      </div>
      <nav className="meta-nav">
        <div className="meta-nav__item">
        </div>
        <div className="meta-nav__item meta-nav__item--highlight">
        </div>
      </nav>
      <div className="nav-container">
        <nav className="main-nav" role="navigation">
          {renderNavItems()}
        </nav>
      </div>
    </div>
  </header>
)

export default Header
