require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    siteTitle: `bobby_dreamer`,    
    siteTitleAlt: `BobbyDreamer - Works of Sushanth Bobby Lloyds`,
    siteHeadline: `Personal website of Sushanth Bobby Lloyds`,
    siteUrl: `https://www.bobbydreamer.xyz`,
    siteDescription: `Sushanth Bobby Lloyds. Programming. Experiments. Wealth. Music. Bio.`,
    author: `Sushanth Bobby Lloyds`,    
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `about_me`,
            slug: `/bio`,
          },          
          {
            title: `blog`,
            slug: `/blog`,
          },
          {
            title: `T.I.L`,
            slug: `/til`,
          },
          {
            title: `music`,
            slug: `/music`,
          },
          {
            title: `iRevere`,
            slug: `/irevere`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/sushanth-bobby`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/sushanth-bobby-lloyds/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        interval: 300,
        timeout: 30000,
        // If you plan on changing the font you'll also need to adjust the Theme UI config to edit the CSS
        // See: https://github.com/LekoArts/gatsby-themes/tree/master/examples/minimal-blog#changing-your-fonts
        web: [
          {
            name: `IBM Plex Sans`,
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
          name: `BobbyDreamer - Works of Sushanth Bobby Lloyds`,
          short_name: `bobby|dreamer`,
          description: `Sushanth Bobby Lloyds. Programming. Experiments. Wealth. Music. Bio.`,
          start_url: `/`,
          background_color: `#fff`,
          theme_color: `#6B46C1`,
          display: `standalone`,
          icons: [
          {
              src: `/favicon-32x32`,
              sizes: `32x32`,
              type: `image/png`,
          },
          {
              src: `/android-chrome-192x192.png`,
              sizes: `192x192`,
              type: `image/png`,
          },
          {
              src: `/android-chrome-512x512.png`,
              sizes: `512x512`,
              type: `image/png`,
          },
          ],
      }, 
      },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                }
              }),
            query: `
              {
                allPost(sort: { fields: date, order: DESC }) {
                  nodes {
                    title
                    date(formatString: "MMMM D, YYYY")
                    excerpt
                    slug
                  }
                }
              }
            `,
            output: `rss.xml`,
            title: `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog`,
          },
        ],
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-6X2JSPJ1WR", // Google Analytics
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },       
  ].filter(Boolean),
}
