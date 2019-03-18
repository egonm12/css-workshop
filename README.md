# Modern CSS crash course

We're going to make an app that shows [toast notifications](https://www.patternfly.org/pattern-library/communication/toast-notifications/). Toasts might look like a simple UI element — but looks can be deceiving!

The focus is on the HTML and the CSS you'll write. We'll do this as "close to the metal" as possible: no build tools, frameworks, processors or anything! JavaScript is kept to a minimum and serves only for some basic interaction. You shouldn't need to edit it, but you're welcome to tweak it to suit your needs.

The goal is to get a few basic HTML/CSS concepts right, and avoid legacy solutions, anti-patterns and bad practices.

## Set up

1. Go to the skeleton setup in the `site` directory.
2. Open `index.html` and `stylesheet.css` in your favorite editor
3. Start fleshing out the ultra-basic example toast with proper HTML and CSS!

Some basic CSS has already been added: a [CSS reset](https://meyerweb.com/eric/tools/css/reset/), and a proper [box model](https://www.paulirish.com/2012/box-sizing-border-box-ftw/). They're both included in the `init.css` file, which you don't have to work in for this workshop, but you're of course free to investigate what goes on there.

A tiny bit of JavaScript is used to add toasts to the page, either by clicking a button or with an interval of 5 seconds. You can configure this in the top of the `index.html` document.

## What are we going to do?

We'll create an app that shows incoming toast messages. By "app" we mean a mobile-friendly layout consisting of a header and a main content area. Check out the branch `fancy` for an example of a fully fledged app!

Inside the main content area, toasts can be shown. These can consist of:

- An icon on the left
- An unkown amount of text
- An optional button related to the text ("Undo")
- An optional button related to the toast ("Close)

New toasts need to be added to the list of already present toasts, if there are any.

You can manually add toasts by pressing a button in the header. If there are one or more toasts, a bell icon is shown in the header. Toasts have a close button, and there is also a button to close all toasts at once.

You're in luck — we're targetting new browsers only. Let's learn new techniques instead of legacy hacks. Bonus points if it works in IE11 though!

Pro tip! Install the [axe extension](https://www.deque.com/axe/) to test your a11y. (Note: your page has to be served (as opposed to be loaded from the filesystem) for the axe extension to work, e.g. through `python -m SimpleHTTPServer`.)

## Things to do

1. Style the current HTML. Start with the general layout of the app.
  - Can you change or add semantic HTML elements?
  - Can you split the CSS into separate files or modules?
1. Style the toasts.
  - Keep it simple, add eye candy later.
  - Check the `assets` folder for SVG icons you could use. Think about how you could use them.
1. Add some animations or transitions to liven up the app.
  - Can you split these into functional and pure eye-cancy?
1. Add some accessbility (a11y) to your site
  - What happens in Mac's Voiceover? (CMD-F5) _Note: Voiceover only works kinda properly in Safari!_

Optional extra special bonus additions

1. Make the app work with different themes
1. Make a desktop version (or make the "mobile view" look good on big screens)
1. Make the app work with keyboard only
1. Whap happens when a toast contains a huge amount of text?

## Things to don't

- Overly specific selectors
- Pixel values
- Floats and clearfixes
- Position, if you can use flexbox
- !important

## Get help & useful sites

- [MDN](https://developer.mozilla.org/en-US/)
- [CSS Tricks](https://css-tricks.com/almanac/)
- [A11y](https://inclusive-components.design/) (specifically [notifications](https://inclusive-components.design/notifications/) for this workshop)

- [SVG icons](https://fontawesome.com/icons?d=gallery&q=plus)
- [Nice gradients](https://www.grabient.com/)
- [Fancy CSS animations](http://bouncejs.com/)

I usually just ~~Google~~ DuckDuckGo my questions: `mdn button` or `css tricks flexbox`






