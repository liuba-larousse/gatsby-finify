<!-- @format -->

1. Switching dark and light mode

This might be very basic and non sophisticated solution, and works only for webpage with small amount of content as it is this webpage for now.
In exploration for better soution. I am a newbie in it 😁

[Using React Context API with Gatsby](https://www.gatsbyjs.com/blog/2019-01-31-using-react-context-api-with-gatsby/#conclusion)

- Create ThemeContext.js in context component which toggles and between dark and light theme and saves theme in localStorage on reload
- ❗Do not forget to modify gatsby-browser.js and pass ThemeProvider
- Wrap Layout.js in ThemeContext component
  -Give .light : .dark classes to Layout.js component
- In \_variables.scss list $light- and $dark- theme varaibles for colors
- Assign appropriate variables to.light and .dark classes inside style.module.scss of Layout.js component
- Toggle between classes by clicking on toggleSwitch

Downside that not all thext is uniformlly one color on my page, so I have to specity which color each selector should be assigned to, which is very inconvinient and time consuming to figure out.

2. Setting up Email from using Using EmailJS and React-Hook-Form

[How To Add an Email Form To Your React Website For Free Using EmailJS and React-Hook-Form](https://medium.com/@placidowang/how-to-add-an-email-form-to-your-react-website-for-free-using-emailjs-and-react-hook-form-7267d6365291)

packages:

- [emailjs-com](https://www.npmjs.com/package/emailjs-com)
- [https://react-hook-form.com/](https://react-hook-form.com/)
