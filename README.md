# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Chart.js](https://www.chartjs.org) - JS library

### What I learned

This challenge has given me the opportunity to work with chart.js for the first time. This library is very cool and really powerfull, I've only started to scratch the surface!

Among the things I've learned (apart from setting up the chart with the provided data):

- Remove legends and axis lines
- Make chart font size responsive
- Dynamic bar colors based on current day of the week and hover state
- Customise tooltip and add '$' to tooltip body

Not to forget the very important need to make the canvas element accessible. I've solved this by setting role="img" and adding an aria-label describing the graph data via javascript.

### Useful resources

- [Chart.js documentation](https://www.chartjs.org/docs/latest/)
- [Chart.js tutorials](https://www.youtube.com/c/ChartJS-tutorials) 


## Author

- Frontend Mentor - [@cr1deg0](https://www.frontendmentor.io/profile/cr1deg0)

