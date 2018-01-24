build-lists: true
footer: IDM 222: Web Authoring II
slidenumbers: true
autoscale: true
theme: Plain Jane, 2

# IDM 222
## Web Design II

---

## Week 3
### Responsive Web Design

---

![](http://digitalsynopsis.com/wp-content/uploads/2015/10/gif-icons-menu-transition-animations-morphing-devices.gif)

^ Today we begin our journey down the path of responsive web design. What is _responsive web design_?

^ In the end we want our content to be accessible everywhere, to everyone, and we want to maintain it in one place.

---

## History

![](http://forum.videohelp.com/attachments/20285-1380712447/MrHand.png)

^ Before there was the internet, there was print. Books, magazines, newspapers etc. Design for print is it's own challenge, but there are some aspects that make this form of design easy. The size of the newspaper is always the same. The position and width of the columns is consistent. Each page of a magazine is the same size with the same safe printable area, and so to design for an ad in a magazine, you have to keep your layout within a certain frame. There is a canvas to use as a boundary for the design.

---

![fit](https://schoolipads.files.wordpress.com/2013/03/wpid-photo-mar-29-2013-1037-am.jpg)

^ Now a days people read a paperback copy, or a digital copy on their computer. Some swipe through while on their morning commute on their phone or tablet. Others don't even read, they have their devices read to them. [@beep]

---

![fit](http://i2.cdn.turner.com/money/dam/assets/150506112202-old-website-apple-1024x640.png)

^ The web has gone through a similar transition. In the early days of the web, where user interface was an actual part of the content, there wasn't a huge range of available hardware. Designs were fixed width, built to fit on the standard desktop monitor within the standard resolution.

---

![](https://i.ytimg.com/vi/e7EfxMOElBE/maxresdefault.jpg)

^ Then this happened... and the job of the web designer really did change forever. For the first time now a massive audience would regularly be accessing the internet from a device other than their desktop computer. So how do we make our websites work on this new device everyone is going to want. Redesigns are expensive and take time...

---

#m.

^ One early solution to this new trend was to create "mdot" sites, or mobile versions of websites that would be served to mobile phones instead of the larger, fixed width desktop sites. So for a site that's optimized for mobile, there's a desktop version and a mobile version. When a web page is accessed, some type of detection code would determine if the user was on a mobile device and if so, redirect the user to the mobile version of the site. Good? Bad? Why?

---

![fit](https://www.mobify.com/static/img/ebooks/mobile-seo-mdot.png)

^ 1. Each version is a separate code base. One change requires at least two edits.

^ 2. Detection code is not always reliable.

^ 3. Mobile versions were totally stripped down versions that did not include all the content/experience. Why should I suffer because I'm using my phone?

---

![](https://cms-assets.tutsplus.com/uploads/users/16/courses/415/preview_image/csssuperhero2.png)

^ "mdot" doesn't work. It's to difficult to manage and the experience is to inconsistent. This became very apparent and design/developer [Ethan Marcotte](https://twitter.com/beep?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) coined a solution now known as responsive web design. We can now write CSS rules that apply to our layouts within specific device conditions. So as our canvas, the browser, changes, so does the set of rules applied to our page. One codebase can be served to both the phone and desktop, without the need for any device detection.

---

```css
div.wrapper {
  background-color: blue;
  color: red;
  margin: 0 auto;
  width: 90%%;
}
@media (min-width: 768px) {
  div.wrapper {
    background-color: green;
    color: yellow;
    max-width: 900px;
  }
}
```

^ Media queries within our CSS setup rule sets that only apply when our canvas, the browser, meets the requirements.

---

## CSS Media Queries

```css
@media (min-width: 320px) {/* iPhone portrait */}
@media (min-width: 480px) {/* iPhone landscape */}
```

^ These were the first common media queries used to target the original iPhone in each orientation. Good? Bad? Why?

---

```css
@media (min-width: 320px) {/* iPhone portrait */}
@media (min-width: 480px) {/* iPhone landscape */}
@media (min-width: 768px) {/* iPad portrait */}
@media (min-width: 1024px) {/* iPad landscape */}
```

---

```css
@media (min-width: 320px) {/* iPhone4 portrait */}
@media (min-width: 480px) {/* iPhone4 landscape */}
@media (min-width: 568px) {/* iPhone5 portrait */}
@media (min-width: 768px) {/* iPad portrait */}
@media (min-width: 1024px) {/* iPad landscape */}
```

---

```css
@media (min-width: 320px) {/* iPhone4 portrait */}
@media (min-width: 375px) {/* iPhone6 portrait */}
@media (min-width: 414px) {/* iPhone6+ portrait */}
@media (min-width: 480px) {/* iPhone4 landscape */}
@media (min-width: 568px) {/* iPhone5 portrait */}
@media (min-width: 667px) {/* iPhone6 landscape */}
@media (min-width: 736px) {/* iPhone6+ landscape */}
@media (min-width: 768px) {/* iPad portrait */}
@media (min-width: 1024px) {/* iPad landscape */}
```

---

```css
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)  { /* STYLES GO HERE */}
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (-webkit-min-device-pixel-ratio: 2) { /* STYLES GO HERE */}
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (-webkit-min-device-pixel-ratio: 1){ /* STYLES GO HERE */}
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (-webkit-min-device-pixel-ratio: 1)  { /* STYLES GO HERE */}
@media (min-width: 320px) {/* iPhone4 portrait */}
@media (min-width: 375px) {/* iPhone6 portrait */}
@media (min-width: 414px) {/* iPhone6+ portrait */}
@media (min-width: 480px) {/* iPhone4 landscape */}
@media (min-width: 568px) {/* iPhone5 portrait */}
@media (min-width: 667px) {/* iPhone6 landscape */}
@media (min-width: 736px) {/* iPhone6+ landscape */}
@media (min-width: 768px) {/* iPad portrait */}
@media (min-width: 1024px) {/* iPad landscape */}
```

^ What about all the different iPads (Air, Mini etc.). New versions with retina displays pack more pixels than some TVs.  This is information as of February 2015.  Since then we've gotten the iPad Pro and iPhone 7. This is iOS devices only. What about the Apple Watch, Apple TV? What about Android devices? What about BlackBerry and every other operating system available today?

---

![](http://acurrie.me/wp-content/uploads/2014/08/opensignal-02-devices.png)

^ Today content on the web needs to be available on a never ending list of devices, systems across infinite locations under environmental conditions totally out of the developer's control. Not only are there more devices than one could ever have access to, other factors like location, connection speed, browser, feature support etc. all impact the user's experience online and ability to find the information they're looking for.

---

## Be Like Water

![](http://www.bruceleeactionmuseum.org/blam/image/Take%20Action/Conscience%20copy.jpg)

^ We can not design for specific devices, specific conditions or specific circumstances. Instead we have to design a system that is flexible regardless of those things that are out of our control.

---

## The Ingredients

- 1. A flexible, grid based layout
- 2. Flexible images and media
- 3. Media queries

---

## Preparation
### Wireframe

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/rwd-desktop.png)

^ My basic page layout is a two column design with the primary content on the left and the secondary content in a smaller column on the right. What would this look like on a mobile device?

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/rwd-mobile.png)

^ When the real estate is the smallest, I want the main content on the top and the secondary content underneath. Since we're designing based on the content and not any one specific device, I'm going to wireframe out how my layout changes based on the content.

^ Should we code the small layout first, or the larger layout first?

---

## Mobile First!

^ Starting with a mobile first design is the best approach. It helps us solve the difficult problem of having very little available canvas. It helps us determine what's really important - what need's to be on this site. If we start with the larger layout, we'll end up either removing items we can't fit in the smaller canvas, or shoe-horning things in sloppily just to make it work.

---

![fit](https://material-design.storage.googleapis.com/publish/material_v_9/0B8olV15J7abPSGFxemFiQVRtb1k/layout_adaptive_breakpoints_01.png)

^ Start with the smallest design and work up to the largest. Add  _breakpoints_ to your CSS as needed. How do you know when you need to add a breakpoint and adjust your layout?

---

![](http://socialmarketing.guru/wp-content/uploads/2015/04/content-is-a-king-1.jpg)

^ The content will tell you when to add a breakpoint. Content drives the design, it dictates when an adjustment is needed. In the simplest terms: start small. As the canvas gets larger, watch the content. When things start to look bad, add a breakpoint.

---

![](http://netdna.webdesignerdepot.com/uploads/2015/03/featured.png)

^ Design mobile first based on content using flexible, responsive media manipulated by CSS media queries. Easy right?... So how do we do this?

---

## Mobile `meta`

```html
<meta name="viewport" ... />
```

^ You need to tell the browser that the site you've created has been optimized for mobile devices. You can do that by using a special _meta_ tag in the `head` of each of your html documents.

---

## Mobile `meta`

Some of the common attributes used with this tag include:

- `content`
- `user-scale`
- `width`
- `maximum-scale`

---

## Mobile `meta`

```html
<meta name="viewport"
      content="initial-scale=1.0,
      user-scalable=no,
      width=device-width,
      maximum-scale=1.0" />
```

^ Which of these attributes do we want?

---

### Keepers

- `name="viewport"`
- `content="initial-scale=1.0`
- `width=device-width`

### Non Keepers

- ~~`user-scalable=no`~~
- ~~`maximum-scale=1.0"`~~

^ Why?

---

### Why?

- text may be to small
- user wants more detail (e.g. images)
- copy/paste may be easier
- crop distractions (ads/animations)
- poor RWD implementation

---

## Mobile `meta`

```html
<meta name="viewport"
      content="width=device-width,
      initial-scale=1.0">
```

---

## A Fixed Width

```css
.wrapper,
header,
footer { width: 960px; }

main { width: 600px; }

aside { width: 360px; }
```

^ This is an example of a fixed width design. Here, you can see the layout of a page with a fixed width of 960px. This page includes a header and a footer that occupy the entire width of the page, along with the main content which is 600px and a sidebar that is 360px. When you use widths like this, the width of the page and its structural elements stay the same regardless of the screen size.

---

## A Fluid Design

```css
.wrapper,
header,
footer { width: 100%; }

main { width: 62.5%; }

aside { width: 37.5%; }
```

^ Because of this you'll want to use fluid layouts when you develop a responsive design. A page that uses a fluid layout adjusts to the size of the screen automatically. Note that there are no media queries involved yet. We're simply making the structure more flexible by removing the strict sizing attributes.

---

## Fixed to Fluid

    target / context x 100 = result

^ If you've already developed a page using fixed widths (whether it's in the browser or Photoshop), you'll need to know how to convert the widths in pixels to percents. Here's the formula to do that. Here, the _target_ is the width of the element in pixels that you want to convert, and _context_ is the width of the containing element in pixels.

---

## Fluid Containers

```css
.wrapper {
  max-width: 1024px;
}
header {
  /*width: 960px;*/
  width: 93.75%; /* (960/1024) x 100 */
}
```

---

## Sizing Fonts

```css
html {
  font-size: 100%;
}
```

^ It is also a best practice to use relative measurements for font sizes. When you do, users can vary the sizes by using their browsers. In responsive design, the font size that's used by an element is relative to the size of the font used by the parent element. Change the parent font size, you automatically adjust all the children element sizes as well.

---

## Sizing Fonts

```css
html {
  font-size: 100%;
}
```

^ In this example, **100%** is equal to **16px** if the user has not adjusted the font size manually. So **100%** is really "one hundred percent of the default size or the size the user has chosen".

---

## Sizing Fonts

```css
html {
  /* do not do this */
  font-size: 16px;
}
```

^ If you hard code the base font size, you're overriding the user's preferences - the user may have their default font size set to something larger, or smaller than 16px.

---

## Media Queries

- width and height of the viewport
- width and height of the device
- orientation (is the tablet/phone in landscape or portrait mode?)
- resolution

^ CSS media queries help us define rulesets in our CSS that only apply in certain circumstances. Instead of looking for a type of device, they look at the capability of the device. Media queries can be used to check many things, such as: (bulleted list)

---

## Media Queries Syntax

```css
@media not|only mediatype and (expressions) {
  /* CSS-Code; */
}
```

^ The result of the query is true if the specified media type matches the type of device the document is being displayed on and all expressions in the media query are true. When a media query is true, the corresponding style sheet or style rules are applied, following the normal cascading rules. Unless you use the not or only operators, the media type is optional and the all type will be implied. You can also have different stylesheets for different media:

---

## CSS3 Media Types

    Value	    Description
    ________________________________________________________________
    all	      Used for all media type devices
    print     Used for printers
    screen	  Used for computer screens, tablets, smart-phones etc.
    speech	  Used for screen readers that "reads" the page out loud

---

## Media Queries

```css
@media screen and (min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}
```

^ This example changes the background-color on screen to lightgreen if the viewport is 480 pixels wide or wider.

---

## Media Queries

```css
@media screen and (min-width: 480px) {
    #leftsidebar {
      float: left;
      width: 200px;
    }
    #main {
      margin-left:216px;
    }
}
```

^ This example shows a menu that will float to the left of the page if the viewport is 480 pixels wide or wider (if the viewport is less than 480 pixels, the menu will be on top of the content)

---

```css
.wrapper {
  color: gray;
  font: 100%/1.4 Arial, sans-serif;
  margin: 2em;
  padding: 1em;
}
@media screen and (min-width: 768px) {
  .wrapper {
    margin: 3em;
    padding: 2em;
  }
}
@media screen and (min-width: 1024px) {
  .wrapper { padding: 3em; }
}
```

^ A mobile first approach dictates that we define global styles for elements first, and then make adjustments as the size of the screen increases.

---

## CSS Media Queries

```css
@media screen and (min-width: 768px) { }
@media print { /* print only styles */ }
```

---

![](http://www.reactiongifs.com/r/2013/01/relieved.gif)

^ Keep calm. Let's build an example.

^ (_week3/01-rwd.html_)

^ (_week3/02-rwd.html_)

---

![](https://soledadpenades.com/imgs/2014/goto/devtools_responsive.gif)

^ As you develop a website using a responsive design, you'll want to test it in devices of various sizes to be sure it works as expected. The best way to do this is deploy the design to a web server and test on as many devices as possible. It's a nice thought, but not very practical. Another option is to use the device emulators and browser simulators that are available for many of the most popular mobile devices and browsers. A simpler way yet is to use the developer tools that are provided by most modern browsers. Let's look at a few (Chrome, Firefox).

---

## Still to come

- flexible images
- flexbox
- accessibility
- preprocessors

---

![](http://i.giphy.com/SDxzM5LAVq5Tq.gif)

^ If you feel confused, don't worry. The best way to learn this is to try it. Once you see it in action for yourself it will be clearer and you can begin applying the concepts to your site.

---

## Takeaways

- **Content**: structured, semantic HTML markup
- sketches/wireframes
- mobile first approach

^ The takeaways today are to make sure you are starting with structured, semantic HTML markup. Nothing else can be done unless the content is in place and well structured. Your sketches and wireframes are critical to this. Cheap, fast iterations will help figure out what needs to be included, what should be removed, and where it should all go, taking a mobile first approach the entire time.

---

## For next week...
