build-lists: true
footer: IDM 221: Web Authoring II
slidenumbers: true
autoscale: true
theme: Cobalt2, 1

# IDM 222

## Web Design II

### Responsive Images

---

# Objectives

- Review Resize Techniques
- Introduce Responsive Image Techniques

---

# Objective

## Review Resize Techniques

---

## Resize Technique

```css
img {
  max-width: 100%;
}
```

^ Easy! The `img` will render at whatever size it wants, as long as it's narrower than its containing element. If it happens to be wider than its container, then the `max-width: 100%` forces the image's width to match the width of its container. @beep

^ Let's add this rule to our example and test.

---

## Resize (more) Technique

```css
img,
embed,
object,
video {
  max-width: 100%;
}
```

^ More good news - we can enhance our selector to include other types of media including video. The `max-width` constraint is a great, light weight solution. And we haven't needed a media query to incorporate any of this. But this technique isn't bulletproof. Can anybody give me a reason/situation where this technique might not be the best solution?

---

### Drawbacks

- scaling down large images: processing power & memory
- file sizes for higher resolutions

^ To support a 4k display, you'll need a large, high res image. (_click_) Using this technique on a mobile device, the device downloads this very large file and then has to scale the image down to fit within your mobile layout. That takes a fair amount of processing power and device memory.

^ (_click_) The file size of this image will also be large, larger than is needed in the mobile environment. The mobile device is never going to render the image at 1200 pixels, why should a mobile user have to download that large file?

---

# Objective

## Introduce Responsive Image Techniques

---

## Responsive HTML Images

```html
   <picture>
     <source media="(min-width: 650px)" srcset="images/kitten-large.png" />
     <source media="(min-width: 465px)" srcset="images/kitten-medium.png" />
     <img src="images/kitten-small.png" alt="cute kitten" />
   </picture>
```

^ A new HTML feature has been defined with a goal of providing client-side solution for delivering alternate image data based on device capabilities to prevent wasted bandwidth and optimize display for both screen and print. [ricg](http://responsiveimages.org)

^ Images have been a huge obstacle to implementing truly adaptable responsive pages. The latest specification of the `picture` element give us semantic ways to group multiple versions of the same image, each version having technical characteristics that make it more or less suitable for a particular user. Let's look at some of the ways browsing environments vary and how we want our images to adapt in these cases. [^1]

[^1]: [Smashing Magazine](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)

---

1. device-pixel-ratio
2. fluid-image
3. variable-sized-images
4. art-direction
5. type-switching

^ (_click_) 1. Our images need to be able to render crisply at different _device-pixel-ratios_. We want high resolution screens to get high resolution images, But we don't want to send those images to users who wouldn't see all of those extra pickles. (_click_) 2. If our layout is fluid, then our images will need to squish and stretch to fit it. (_click_) 3. Cases one and two are very closely related. We'll tackle both problems simultaneously using the _variable-size-image_ use case. (_click_) 4. Sometimes will need to adapt our images, For example crop the image or even slightly alter the content. (_click_) 5. Finally, different browser support different image formats.[^1]

[^1]: [Smashing Magazine](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)

---

## The `device-pixel-ratio` Use Case

```html
<img srcset="small.jpg 1x, large.jpg 2x"
  src="small.jpg"
  alt="my image" />
```

^ Let's start simply, with a fixed width image that we want to adapt to varying device pixel refuse.

^ To do this, will use the first tool that the new spec gives us for grouping and describing image sources: the `srcset` attribute. Say we have two versions of an image, we want to send large.jpg only do users with high resolution screens. Using `srcset` that, we markup or image like this:[^1]

^ The `srcset` attribute takes a comma separated list of image URLs, each with an `x` descriptor stating the _device-pixel-ratio_ that the file is intended for. The `src` is there for browsers that don't understand `srcset`.[^2]

^ That markup will not efficiently squish and stretch our image in a fluid layout. This technique allows us to tell the browser the rendered size of our image. Once we tell the browser how many pixels it needs and how many pixels each of our sources has, picking a source becomes trivial. The browser picks the smallest source that will still look reasonably crisp within its container.[^3]

[^1]: [Smashing Magazine](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)

[^2]: [Smashing Magazine](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)

[^3]: [Smashing Magazine](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)

---

## Fluid / Variable Sized Images Use Case Example

```html
<img srcset="large.jpg  1024w,
      medium.jpg 640w,
      small.jpg  320w"
   src="small.jpg"
   alt="my image" />
```

^ In this case we have three images. Were using `srcset` again, but instead of `x` descriptors, we are attaching `w` descriptors to our sources. These describe the actual width, in pixels, of the referenced file. So, if you "Save for Web..." at 1024 x 768 pixels, then mark up that source in the `srcset` as `1024w`. So, that's `w` in `srcset`, which describes how many pixels each of our sources _has_.[^1]

[^1]: [Smashing Magazine](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)

---

## Fluid / Variable Sized Images Use Case (continued)

```html
<img srcset="large.jpg  1024w,
      medium.jpg 640w,
      small.jpg  320w"
   sizes="(min-width: 36em) 33.3vw,
      100vw"
   src="small.jpg"
   alt="my image" />
```

^ Next, we add the `sizes` attribute, which Tells the browser how many pixels it _needs_ by describing the final rendered width of our image. Think of `sizes` as a way to give the browser a bit of information about the pages layout a little ahead of time, so that it can pick the source before it has parsed or rendered any of the pages CSS. We are passing the browser a CSS length that describes the images rendered width. Lengths can be absolute (pixels, ems), or relative to the viewport (vw).[^1]

[^1]: [Smashing Magazine](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)

---

## Fluid / Variable Sized Images Use Case - Breakpoint

```html
<img srcset="large.jpg  1024w,
      medium.jpg 640w,
      small.jpg  320w"
   sizes="(min-width: 36em) 33.3vw,
      100vw"
   src="small.jpg"
   alt="my image" />
```

^ This example also includes a breakpoint at 36 ems. When the viewport is narrower than 36 ems, the layout changes. Below that breakpoint, the image will fit 100% of the viewports width. The browser goes over each media query until it finds one that matches and then uses the matching query's paired length. If no media queries match, then the browser uses a default length.[^1]

[^1]: [Smashing Magazine](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)

---

## Art-Direction Use Case

```html
<picture>
  <source media="(min-width: 36em)"
     srcset="large.jpg  1024w,
        medium.jpg 640w,
        small.jpg  320w"
     sizes="33.3vw" />
  <source srcset="cropped-large.jpg 2x,
        cropped-small.jpg 1x" />
  <img src="small.jpg" alt="my image" />
</picture>
```

^ What if we want to go further, adapt more? What if we want to crop the image, or zoom to a certain important part of the image, or add space for text on the side of the image. These variables would change based on the available size and layout of our page (iPad example?) This is considered art-direction.[^1]

^ Let's go back to our previous example. Suppose that instead of letting our image fill the full width of the viewport on small screens, we crop the image square, zoom in on the most important part of the subject, and present that small square crop at a fixed size floated to the left, leaving a lot of space for descriptive text.[^2]

[^1]: [Smashing Magazine](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)

[^2]: [Smashing Magazine](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)

---

[.code-highlight: 2-6]

### Art-Direction Use Case - Source 1

```html
<picture>
  <source media="(min-width: 36em)"
     srcset="large.jpg  1024w,
        medium.jpg 640w,
        small.jpg  320w"
     sizes="33.3vw" />
  <source srcset="cropped-large.jpg 2x,
        cropped-small.jpg 1x" />
  <img src="small.jpg" alt="my image" />
</picture>
```

^ Let's break this down. This `source` represents the full uncropped version of our image. We want to show the full image only when the viewport is wider than 36 ems. The first attribute here, `media="(min-width: 36em)"`, makes that happen. If a query in a `media` attribute evaluates to `true`, then the browser must use that `source`, otherwise it's skipped. the other two attributes, `srcset` and `sizes` are copied from our previous example. [^1]

[^1]: [Smashing Magazine](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)

---

[.code-highlight: 7-8]

### Art-Direction Use Case - Source 2

```html
<picture>
  <source media="(min-width: 36em)"
     srcset="large.jpg  1024w,
        medium.jpg 640w,
        small.jpg  320w"
     sizes="33.3vw" />
  <source srcset="cropped-large.jpg 2x,
        cropped-small.jpg 1x" />
  <img src="small.jpg" alt="my image" />
</picture>
```

^ When the viewport is narrower than 36 ems, the first `source`'s media query will evaluate to `false`, and we proceed to the second. This represents our small square cropped version, displayed at a fixed width. We still want it to render crisply on high-resolution screens, so we supply both a 1x and 2x version and mark them up with simple `x` descriptors.[^1]

[^1]: [Smashing Magazine](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)

---

[.code-highlight: 9]

### Art-Direction Use Case - `img` Tag

```html
<picture>
  <source media="(min-width: 36em)"
     srcset="large.jpg  1024w,
        medium.jpg 640w,
        small.jpg  320w"
     sizes="33.3vw" />
  <source srcset="cropped-large.jpg 2x,
        cropped-small.jpg 1x" />
  <img src="small.jpg" alt="my image" />
</picture>
```

^ Lastly is the `img`, which is required. Without `img`, there's no image; `picture` and all of its `source`'s are there to feed the `img` a `src`. `picture` itself is invisible. Its `source`'s are there for the browser to draw alternate versions of the image from. Once a source URL is chosen, that URL is fed to the `img`.[^1]

[^1]: [Smashing Magazine](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)

---

## The Type-Switching Use Case

```html
<picture>
   <source type="image/webp" srcset="logo.webp" />
   <img src="logo.png" alt="my logo" />
</picture>
```

^ The Type-Switching use case is great if we want to give a new file format a spin, and provide a fallback for non-supporting browsers.

^ If the browser doesn't understand the `image/webp` media type, it skips the first `source`; if it can't figure out `image/png`, it falls back to `img` and the GIF file.[^1]

[^1]: [Smashing Magazine](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)

---

## Can I Use It

[picture](http://caniuse.com/#search=picture)
[srcset](http://caniuse.com/#search=srcset)

---

## Example Time

^ _examples/responsive-images/_
