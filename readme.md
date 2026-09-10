# Frontend Mentor - Grid landing page solution

This is a solution to the [Grid landing page challenge on Frontend Mentor](https://www.google.com/search?q=https://www.frontendmentor.io/challenges/grid-landing-page). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

* [The challenge](https://www.frontendmentor.io/challenges/grid-landing-page)
* [Screenshot](oms-grid-landing-page/preview.png)
* [Links](https://www.google.com/search?q=%23links)
* 

* [My process]()
* [Built with]()
* [What I learned]()
* [Continued development](https://www.On-its-way)


## Overview

### The challenge

My task was to build a landing page hero section for a fictional education nonprofit and get it looking as close to the design as possible.

Users should be able to:

* View the optimal layout for the page depending on their device's screen size.


* See hover and focus states for all interactive elements on the page.


* Open and close the navigation menu at any screen size.



### Screenshot

### Links

* Solution URL: [Add your repository URL here]
* Live Site URL: [Add your live site URL here]

## My process

### Built with

* Semantic HTML5 markup[cite: 7]
* CSS custom properties (variables)[cite: 9]
* CSS Flexbox[cite: 9]
* CSS Grid[cite: 9]
* Vanilla JavaScript for DOM manipulation and modal accessibility[cite: 8]

### What I learned

This project was a great excuse to dive deeper into CSS Grid. Since there was no imagery to lean on, the layout, spacing rhythm, and hairline dividers between the cards were doing all the visual work.

Here are some of the key takeaways from my code:

**1. Asymmetrical CSS Grid Layouts**
To match the design's specific proportions, I used standard grid fractional units (`1.2fr 2fr`) on the `.c-body` container to split the main headline area from the 2x2 statistics grid[cite: 9].

**2. Creating Hairline Dividers**
Instead of adding individual borders to every element, I applied `border-right` and `border-bottom` using an `rgba(255, 255, 255, 0.15)` color value to the `aside > div` cards to create a seamless, translucent grid effect[cite: 9]. I then used the `:nth-child` pseudo-class to ensure the outer edges remained clean:

```css
aside > div:nth-child(2n) {
    border-right: none;
}

aside > div:nth-child(3),
aside > div:nth-child(4) {
    border-bottom: none;
}

```

**3. Accessible Navigation Menus**
For the optional JavaScript toggle, I made sure the menu modal was interactive and accessible. I managed `aria-expanded` and `aria-hidden` states, and added an event listener so users can easily close the menu using the `Escape` key[cite: 8].

```javascript
// Close Menu on Escape Key //
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuModal.classList.contains('active')) {
        closeBtn.click();
    }
});

```

### Continued development

As a student web developer based in Lagos, Nigeria, I plan to continue refining my skills with complex, responsive CSS Grid architectures. Moving forward, I want to experiment more with adding fluid CSS animations and interactive transitions to mobile navigation menus to make them feel even more polished.

## Author

* Frontend Mentor - [username](https://www.frontendmentor.io/profile/OMS-Create)
* GitHub - [username](https://github.com/OMS-Create)