---
path: '/post-two'
date: '2020-03-10'
title: 'My second post'
author: 'Mythily'
---

This is the second markdown post. I installed:
- gatsby-source-filesystem 
- gatsby-transformer-remark 
- gatsby-plugin-catch-links

Then added to gatsby.config.js, the following:
'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',