# Modern CSS crash course

We're going to make a [toast notification](https://www.patternfly.org/pattern-library/communication/toast-notifications/). This might look like a simple UI element, but it allows us to touch on many CSS/layout concepts.

The focus is on the HTML and the CSS you'll write. We'll do this as "close to the metal" as possible: no build tools, frameworks, processors or anything!

The goal is to get a few basic concepts right, and avoid legacy solutions, anti-patterns and bad practices.

## Getting started

1. Go to the skeleton setup in the `site` directory.
2. Open `index.html` and `stylesheet.css` in your favorite editor
3. Start fleshing out the ultra-basic example toast with proper HTML and CSS!

Some basic CSS has already been added: a [CSS reset](https://meyerweb.com/eric/tools/css/reset/), and a proper [box model](https://www.paulirish.com/2012/box-sizing-border-box-ftw/). They're both included in the `reset.css` file, which you don't have to work in for this workshop, but you're of course free to investigate what goes on there.

## Instructions

Create a toast that has:

- *An icon on the left.* Color and icon can be changed per message
- An unkown amount of text
- An optional button related to the text ("Undo")
- An optional button related to the toast ("Close)

New toasts need to be added to the list of already present toasts, if there are any.

## Pre-study material

If you're aware of these CSS basics, you'll get a flying start!

- [Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

## Suggested steps

1. Position the toast
  - Show on top of the regular content
  - Desktop: in a corner of the screen, with some margin
  - Mobile: at bottom, no margin
  - Prevent weird sizes (oversized/tiny)

2. Create basic layout of the toast
  - Icon | Text | Optional action | Close button

x. Stress test your toast!
  - What happens when the text is 1000 characters?
  - What happens when 40 toaats fire off in a short time?
  - What happens when the user resizes their window?
  - What happens when you can only use your keyboard to interact with toasts?

