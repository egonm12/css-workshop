# Aanwezigen:

https://docs.google.com/spreadsheets/d/1-pf8bsM2i_3-kz2-zMWMv6LXsgQn2YOHG-Cg-pRXVeo/edit#gid=0

# Links, nog uitzoeken

https://blog.logrocket.com/the-only-reason-your-css-fails-8e4388d562af
https://i.pinimg.com/originals/88/69/58/886958dd7944d86d79eb2ff7ee7626a2.png
https://www.patternfly.org/pattern-library/communication/toast-notifications/


Doel: basiskennis, "CSS voor backenders", vermijden van anti-patterns/bad practices.

Iets nabouwen, bijv. website of klein onderdeel ervan (wat liefst zoveel mogelijk bouwsteentjes bevat), bijv. een "toast"


"Een goede CSSer herken je aan hoe simpel, klein en krachtig ... " — in ieder geval in tegenstelling tot dikke SCSS, build shit, etc.


- Specificity

- Layout: flexbox / grid
- Animations
- Transitions (opacity and transform)
- CSS custom properties
- A11y
- Responsive design

No:
- Floats, clearfix

? CSS Grid alleen bijv. in achterliggende pagina gebruiken? Om zo alleen voor "gevorderden" te laten?

# Simple / introduction / to address / opfrisser
- How to vertical align?
- "Nakes" HTML and CSS, up to you to apply to React/whatever



# Cheat sheet / instructions

- Avoid:
  - Floats
  - Position
  - !important
  - Pixel values
  - Overly specific selectors

- Find help:
  - MDN
  - CSS Tricks




===============================================================================
===============================================================================
===============================================================================
===============================================================================
===============================================================================
===============================================================================


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






# Messages

Types:
  info
  confirmation
  warning
  alert

one:
  type: info
  text: Welcome back!
  closable: true
two:
  type: confirmation
  text: Settings have been updated.
  closable: false
  closeAfter: 5
three:
  type: warning
  text: The message has been deleted.
  closable: true
  action: Undo
  onAction: [execute some JavaScript]
four:
  type: alert
  text: An urgent message has arrived!
  closable: false
  action: Go to inbox
  onAction: [navigate to other page]