# Selectors

An overview of all types of selectors.

## Elements
`body { }`
`div { }`
`button { }`

## Classes
`.navigation { }`
`.active { }`

## IDs
`#logo { }`

---

## Descendant selector
`ul li { }`
`.active p { }`

## Child selector
`ul > li { }`
`.main-header > a { }`

## Adjecent sibling
`h1 + p { }`
`.error + .error { }`

## General sibling
`h1 ~ p { }`

---

## Attribute selectors
`input[type="text"] { }`
`[disabled] { }`

### "Has string" attribute selectors
`*[data-status~=deleted] { }`

### "Starts with string" attribute selectors
`a[href^="https"] { }`

### "Ends with string" attribute selectors
`a[href$=".nl"] { }`

### "Contains string" attribute selectors
`a[href*=".nl"] { }`

---

## Pseudo class selectors

`:hover { }`
`:first-child { }`, `:last-child { }`
`:nth-child(2) { }`, `:nth-child(odd) { }`
`p:nth-of-type(odd) { }`
`li:only-child {}`
`:empty {}`
`:not(.active) {}`

---

## Pseudo element selectors

`::first-letter { }`
`::first-line { }`
`::before { content: ""; } `, `::after { content: ""; } `

---

## Opinionated advice 🤓

- Keep it simple! Don't make a selector more specific than necessary.
- Classes are for developers. Don't be shy to use them.
