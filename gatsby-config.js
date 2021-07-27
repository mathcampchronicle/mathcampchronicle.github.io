module.exports = {
  // siteMetadata is used for sitemap.xml
  siteMetadata: {
    siteUrl: `https://mathcampchronicle.github.io/sitemap.xml` // @TODO swap out for your host
  },
  plugins: [
{
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-mathjax`,
      ],
    },
  },
	{
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-katex`,
          options: {
            // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
            strict: `ignore`
          }
        }
      ],
    },
  },
    {
      resolve: 'gatsby-source-livingdocs',
      options: {
        // The accessToken is accessed at buildtime and set in netlify in this case
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InB1YmxpYy1hcGk6cmVhZCBwdWJsaWMtYXBpOndyaXRlIHB1YmxpYy1hcGk6Y29uZmlnOnJlYWQgcHVibGljLWFwaTpjb25maWc6d3JpdGUiLCJuYW1lIjoiY2hyb25pY2xlLXNpdGUiLCJwcm9qZWN0SWQiOjEzNzUsImNoYW5uZWxJZCI6MTMyMywidHlwZSI6ImNsaWVudCIsImp0aSI6Ijg3Zjc2NjgxLWY1YjMtNGEyZC1iODQ2LTY5OGQwM2IzZWIzMyIsImNvZGUiOiI4N2Y3NjY4MS1mNWIzLTRhMmQtYjg0Ni02OThkMDNiM2ViMzMiLCJpYXQiOjE2MjYzOTU5OTN9.DI_FOLhqPY72xr4Ffv2h7cLjWnY9c9M0RMBY-ge3AXc",
        design: {
          name: 'living-times',
          version: '1.0.0'
        },
        recursion: true
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://mathcampchronicle.github.io/', // @TODO swap out for your host
        sitemap: 'https://mathcampchronicle.github.io/sitemap.xml', // @TODO swap out for your host
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}]
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mathcamp Chronicle', // @TODO swap out for your name / icon
        short_name: 'Mathcamp Chronicle',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'minimal-ui',
        icon: 'src/resources/favicon.png'
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['src/resources/stylesheets/living-times.scss'] // @TODO swap out for your stylesheets
      }
    }
  ]
}
