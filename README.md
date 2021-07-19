# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

I learned how in JavaScript Objects are used for collection of data. Since I first learned Ruby first I was looking for something which contained data the same way that a Ruby Hash does. I then iterated through that using dot notation. 

Another important detail I worked with is JavaScript escaping, since the paragraph text contained a lot of quotation marks and appostrophes. I managed to go around that by using back-lashes.

Since the button controls run through the Objects, I had to use the onload property as an event handler to load the first slide.

I am also happy that I finally had the opportunity to use the "Not" selector Pseudo-Class in CSS, as seen below:
```css
img:first-of-type:not(.controls img){
    opacity: .3;
    position: absolute;
    width: 100%;
}
```

### Continued development

I still need to figure out how to re-size the curve in the pseudo-element (see commented out line 86 of style.css), and also how to improve on the opacity image without affecting background.

### Useful resources

- [Codepen Drawing board](https://codepen.io/kristacalleja) - This helped me reason out my workflow, and how the data would be loaded dynamically through JavaScript. 

## Author

- Website - [Krista Calleja](https://kristacalleja.github.io)
- Frontend Mentor - [@KristaCalleja](https://www.frontendmentor.io/profile/KristaCalleja)

