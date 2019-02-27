# Modern CSS crash course

We're going to make a [toast notification](https://www.patternfly.org/pattern-library/communication/toast-notifications/). This might look like a simple UI element, but it allows us to touch on many CSS/layout concepts.

## Get started

1. Install [Eleventy](npm install -g @11ty/eleventy) to automate some development processes
2. Open `index.html` in your favorite editor
3. Start adding a toast!

## Specs

Create a toast that has:

- *An icon on the left.* Color and icon can be changed per message
- An unkown amount of text
- An optional button related to the text ("Reload page")
- An optional button related to the toast (close)

! If a new toast is shown while one is still open, it needs to be added to the toast that's already open

Bonus points for:
- Text has multiple lines
- Can be interacted with by using only the keyboard

## Pre-study material

If you're aware of these CSS basics, you'll get a flying start!

- [Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

## Basics

- Use a CSS reset
- Use proper box-sizing


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

