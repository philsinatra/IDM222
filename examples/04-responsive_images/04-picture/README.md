# Responsive Images Instructor Guide

Run this example on a web server.

Use Firefox devtools network tab for debugging.

## Setup HTML Framework

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Document</title>
  <link rel="stylesheet" href="screen.css">
</head>

<body>

  <div class="container">

  </div>

</body>

</html>
```

## Setup CSS Framework

```css
:root {
  box-sizing: border-box;
  font-size: 100%;
}

body {
  font-family: sans-serif;
}

picture {
  display: block;
  width: 100%;
}

.container {
  margin: 0 auto 3rem;
  max-width: 800px;
}
```

## Media Query Example

- Add basic image tag

```diff
<div class="container">
+ <img src="images/kitten-small.png" alt="cute kitten">
</div>
```

- Add `picture` and `source` tags with media queries

```diff
<div class="container">
+ <picture>
+   <source media="(min-width: 650px)" srcset="images/kitten-large.png">
+   <source media="(min-width: 465px)" srcset="images/kitten-medium.png">
    <img src="images/kitten-small.png" alt="cute kitten">
+ </picture>
</div>
```

## Width Descriptors & Art Direction Example

When the final size of the image isn't known, it can be difficult to specify a density descriptor for the image sources. This is especially true for images that span a proportional width of the browser and are fluid, depending on the size of the browser.

Instead of supplying fixed image sizes and densities, the size of each supplied image can be specified by adding a width descriptor along with the size of the image element, allowing the browser to automatically calculate the effective pixel density and choose the best image to download.

- Add basic image tag

```diff
<div class="container">
+ <img src="images/lighthouse-160.jpg" alt="lighthouse">
</div>
```

- Add `picture` Source With Media Queries

```diff
<div class="container">
+ <picture>
+   <source media="(min-width: 800px)" sizes="80vw" srcset="images/lighthouse-landscape-640.jpg 640w,
+             images/lighthouse-landscape-1280.jpg 1280w,
+             images/lighthouse-landscape-2560.jpg 2560w">
    <img src="images/lighthouse-160.jpg" alt="lighthouse">
+ </picture>
</div>
```

- Add Source Set For Image Element

```diff
<picture>
  <source media="(min-width: 800px)" sizes="80vw" srcset="images/lighthouse-landscape-640.jpg 640w,
            images/lighthouse-landscape-1280.jpg 1280w,
            images/lighthouse-landscape-2560.jpg 2560w">
- <img src="images/lighthouse-160.jpg" alt="lighthouse">
+ <img src="images/lighthouse-160.jpg" alt="lighthouse"
+   sizes="80vw"
+   srcset="images/lighthouse-160.jpg 160w,
+           images/lighthouse-320.jpg 320w,
+           images/lighthouse-640.jpg 640w,
+           images/lighthouse-1280.jpg 1280w">
</picture>
```

This example uses the `sizes` attribute to set the proportion of an image to always fill 80% of the viewport. It is combined with the `srcset` attribute to supply four versions of the same lighthouse photo in widths of 160px, 320px, 640px, and 1280px wide.

The browser will use these hints to choose the most appropriate image resource to serve up based on the viewport width and hardware display resolution.

When the viewport is at 800px and above, the browser will serve up a landscape version of the lighthouse version instead.

## File Format Example

- Add basic image tag

```diff
<div class="container">
+ <img src="images/butterfly.jpg" alt="a butterfly">
</div>
```

- Add Source Tag For Additional Image Format

```diff
<div class="container">
+ <picture>
+   <source type="image/webp" srcset="images/butterfly.webp">
    <img src="images/butterfly.jpg" alt="a butterfly">
+ </picture>
</div>

Test this in Firefox and Safari to confirm loading of the available file type.