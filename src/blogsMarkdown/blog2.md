---
title: "Introduction to Gatsby + BigCommerce"
author: "Aman Pathak"
date: "2021-03-12"
---

![Blog2](./blog-2.jpg)
<br/>
<br/>

I first started experimenting with Gatsby about a year ago, during a time when it seemed like every podcast and blog in my feed was suddenly talking about the JAMstack. I hadn’t used a static site generator before, but I had some familiarity with React and a lot of curiosity about GraphQL. Setting up a Gatsby site seemed like a fun way to brush up on both technologies.
<br/>
<br/>

It didn’t take long to see why Gatsby has such an active community around it or to see the potential for using Gatsby alongside other platforms, like BigCommerce. For beginners like me, Gatsby has great documentation, and setting up a Gatsby site with Netlify makes it super easy to host the site and set up a continuous integration workflow.
<br />
<br />

While my Gatsby side projects are still in the experimental phase, I would like to share what I’ve learned so far. In this post, we’ll discuss some of the reasons why Gatsby is a great choice for decoupled ecommerce sites and break down the components of a Gatsby + BigCommerce integration.


<br />

## What is Gatsby ?

<br />
If you called Gatsby a static site generator, you’d be correct, but it does more than output static HTML files. The front end is also a rehydrated React app, allowing you to manage state, call out to external web services, or authenticate users. There’s a perception that static site generators are only for building sites like documentation or marketing sites — use cases that are content focused, but not very dynamic. The rehydrated DOM allows you to build sites that are far more app-like, including ecommerce sites. Gatsby also works well with serverless function providers like Netlify Functions, for use cases like pinging a database or calling a server-to-server API, when you really do need a back end.
<br />



