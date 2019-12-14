module.exports = {
  siteMetadata: {
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
        {name: 'Press', ref: '/about/press'},
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
	  { resolve: `gatsby-remark-images`, options: { maxWidth: 590, showCaptions: true } }
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
    }
  ]
};
