module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.example.com',
    title: 'Topple',
    menuLinks: [
    	{ name: 'Product', link: '/eap', children: [
    	  { name: 'Early Adopter Program', link: '/eap' },
    	  { name: 'Notes', link: '/notes' },
    	  { name: 'Teams', link: '/teams' },
	]},
    	{ name: 'Pricing', link: '/pricing' },
    	{ name: 'News', link: '/news' },
    	{ name: 'Blog', link: '/blog' },
    ],
    social: {
      twitter: '@gotopple',
      github: 'gotopple'
    },
    footerLinks: {
      company: [
        {name: 'Product', ref: '/eap'},
        {name: 'About and Roadmap', ref: '/about'},
        {name: 'Pricing', ref: '/pricing'},
        {name: 'Team and Careers', ref: '/about/team'},
        {name: 'Privacy', ref: '/about/privacy'},
        {name: 'Press', ref: '/press'},
      ],
      resources: [
        {name: 'News', ref: '/news'},
        {name: 'Blog', ref: '/blog'},
        {name: 'Open Source Software', ref: '/about/oss'},
        {name: 'Open Source Companies', ref: '/about/osc'},
        {name: 'Brain Drain Calculator', ref: '/bdc'},
        {name: 'API Docs', ref: '/api/docs'},
      ]
    }
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-smartypants`,
          `gatsby-remark-reading-time`,
          { resolve: `gatsby-remark-copy-linked-files`,
            options: { destinationDir: `static` }
          },
	  { resolve: `gatsby-remark-images`, 
            options: { 
              maxWidth: 590,
              showCaptions: false, 
              linkImagesToOriginal: true
            } 
          }
	]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
            variants: [`200`,`400`,`400i`,`700`,`900`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/content/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gotopple.us12.list-manage.com/subscribe/post?u=a0d05d32dc9b6cfbf0f4271f2&amp;id=3de91380d6',
      },
    }
  ]
};
