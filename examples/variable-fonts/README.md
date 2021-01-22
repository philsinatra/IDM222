# Working With Variable Fonts

A variable font is a single font file that behaves like multiple styles. There are plenty of sites demoing all the possibilities and the technology within. Today we're going to build a simple, production build example using variable fonts so you can see a real life implementation.

- [Can I Use: Variable Fonts](https://caniuse.com/#search=variable%20fonts)

## Link to the fonts

Getting started is fairly straight forward. I've downloaded the files for the Source Sans variable font from Github.

- Setup HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Variable Fonts</title>
  <link rel="stylesheet" href="screen.css">
</head>

<body>
  <main>
    <h1>Main Heading</h1>
    <p>lorem50</p>
    <h2>Sub Heading</h2>
    <p>lorem25</p>
    <p>lorem25</p>
    <h3>Sub Sub Heading</h3>
    <p>lorem25</p>
    <p>lorem25</p>
  </main>
</body>

</html>
```

- Setup CSS

```css
html {
  box-sizing: border-box;
  font-size: 100%;
}

@media screen and (min-width: 800px) {
  html {
    font-size: 150%;
  }
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

main {
  margin: 0 auto;
  max-width: 65ch;
}
```

## Setup the weights

- Add `@font-face` rule

```diff
+ @font-face {
+   font-family: 'SourceSans';
+   src: url('fonts/SourceSansVariable-Roman.ttf') format('truetype');
+ }

html {
  box-sizing: border-box;
+ font-family: 'SourceSans', sans-serif;
  font-size: 100%;
}
```

The variable font implementation in CSS is designed to use existing properties for certain pre-defined variation axes. We’re using three weights within the body text: regular, semibold and black. We set the bold fonts using font-weight in the usual way:

```css
h1 { font-weight: 900; }
h3 { font-weight: 600; }
```

However this doesn’t work as expected without modifying the `@font-face` rule. When you include a font-weight descriptor in an `@font-face` rule, you are telling the browser that the font corresponds to that weight, and that weight only. When you omit the font-weight descriptor, the browser treats the rule as if you set `font-weight:400`. This is the case whether or not your font is variable with a weight axis - the font will be 'clamped' to a weight of 400.

To make use of the weight axis, and for the font-weight properties to work as you might expect, we needed to add a font-weight range to the `@font-face` rule:

```diff
@font-face {
  font-family: 'SourceSans';
  src: url('fonts/SourceSansVariable-Roman.ttf') format('truetype');
+ font-weight: 1 999;
}
```

Now we can display the font weight at any value from 1 to 999.

```diff
main {
+ font-weight: 300;
  margin: 0 auto;
  max-width: 65ch;
}
```

```css
h1 {
  font-weight: 900;
}

h2 {
  font-weight: 700;
}

h3 {
  font-weight: 500;
}
```

## Subset and create alternative fonts

The Source Sans variable font is pretty big: the TrueType file is over 500kb. This is mostly because it has a huge character set: nearly 2000 glyphs including Greek, Cyrillic, alternate characters and symbols. Your first step in reducing file size is to create a subset of the font so that it no longer contains characters you won’t ever need.

There are many tools available online that will help you create a subset of your font files. What you have to be careful of is that these tools don't strip out the variation data while creating the subset. A command line tool called [Glyphhanger](https://www.npmjs.com/package/glyphhanger) does a good job of letting you create a subset, as well as generating the WOFF(2) files you need for fallback support.

## Provide fonts for incapable browsers

Variable fonts will render on non compatible browsers, but you won't have control over the font weight as you would expect. To get around this you have to serve fall back font files using the CSS font spec.

```diff
@font-face {
- font-family: 'SourceSans';
+ font-family: 'SourceSansVariable';
  src: url('fonts/SourceSansVariable-Roman.ttf') format('truetype');
  font-weight: 1 999;
}

+ @font-face {
+   font-family: 'SourceSans';
+   src: url('fonts/SourceSansPro-Black.ttf.woff2') format('woff2'),
+        url('fonts/SourceSansPro-Black.ttf.woff') format('woff');
+   font-weight: 900;
+ }

+ @font-face {
+   font-family: 'SourceSans';
+   src: url('fonts/SourceSansPro-Semibold.ttf.woff2') format('woff2'),
+        url('fonts/SourceSansPro-Semibold.ttf.woff.ttf.woff') format('woff');
+   font-weight: 500;
+ }
```

**Note** check in browser before proceeding.

Then we need to write a `@supports` rule to ensure the right font goes to the right browser.

```diff
html {
  box-sizing: border-box;
  font-family: 'SourceSans', sans-serif;
  font-size: 100%;
}

+ @supports (font-variation-settings: normal) {
+   html {
+     font-family: 'SourceSansVariable', sans-serif;
+   }
+ }
```

## Final notes

To help with consistency, you should explicitly set the font weight even when the weight you want is 400 or normal. With a variable font, one browser’s idea of the default weight may differ slightly from another. In testing Firefox rendered default text significantly lighter than Safari and Chrome.

```diff
html {
  box-sizing: border-box;
  font-family: 'SourceSans', sans-serif;
  font-size: 100%;
+ font-weight: 400;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: 'SourceSansVariable', sans-serif;
+   font-variation-settings: "wght" 400;
  }
}

@media screen and (min-width: 800px) {
  html {
    font-size: 150%;
  }
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

main {
- font-weight: 300;
  margin: 0 auto;
  max-width: 65ch;
}

h1 {
  font-weight: 900;
+ font-variation-settings: "wght" 900;
}

h2 {
  font-weight: 700;
+ font-variation-settings: "wght" 700;
}

h3 {
  font-weight: 500;
+ font-variation-settings: "wght" 500;
}
```