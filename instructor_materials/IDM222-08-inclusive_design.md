build-lists: true
footer: IDM 222: Web Authoring II
slidenumbers: true
autoscale: true
theme: Plain Jane, 2

# IDM 222
## Web Design II

---

# Week 8

## Inclusive Design Patterns

---

> A mindset, not a skill.
-- Heydon Pickering

^ Thinking about the structure of data and trying to arrive at an optimal solution that will suit as many users as possible.

---

### The Button Example

^ A designer with just enough knowledge of HTML, CSS and JavaScript wants to add a button to a webpage. They want to style the button to match the web site's design and branding, using a combination of color, images, and typography.

---

### The HTML

```html
<div class="button"></div>
```

^ The HTML looks like this.

---

### The CSS

```css
.button {
  width: 200px;
  height: 70px;
  background: url('../images/button.png');
}
```

^ and the CSS looks like this.

---

### The JavaScript

```javascript
var button = document.querySelector('.button');

button.addEventListener('click', function() {
  // the event fired on click
});
```

^ The JavaScript would probably be written using jQuery, or the Web API (vanilla JavaScript) shown here.

---

### The Problems

- non-vector image
- pixel based dimensions
- loss of image

^ The mindset of creating an inclusive design can help diagnose problems with this setup. First, (click) the image used is not vector, so it cannot be scaled without becoming degraded and blurry when a user zooms their screen. (click) If the user adjusts their browser's default font size, the image (which is defined using pixels rather than relative units) will not scale at all. (click) If a mobile user switches off image loading to save bandwidth, the button will be invisible.

---

### More Problems

- `<div>` element is not focusable
- `<div>` element is semantically inert
- label unavailable
- untranslatable

^ It doesn't stop there. (click) The `<div>` element is not focusable by keyboard. Anyone choosing to navigate the page with their keyboard will not be able to select the button. (click) The `<div>` element is also semantically inert, offering no valuable information to screen readers that this element is being used as a button. (click) The label of the button is part of the image, and therefore also unavailable to assistive technology. (click) The button is untranslatable into different languages, making it excluded international audiences.

---

![](http://i.giphy.com/QB78LMb32YqoE.gif)

^ That's a lot of people being left out. Being able to anticipate these problems can help us achieve more, sometimes by doing less. You need to know when to design and when to employ what is _already designed_.

---

### The Solution

```html
<button>Start</button>
```

- resizable
- translatable
- focusable
- stylable
- restylable
- maintainable
- mutable
- **simple**

^ A simple, HTML button element, provided by the standard HTML specification. Resizable, translatable, focusable, stylable, restylable, maintainable, mutable, _simple_. Not all inclusive solutions are so simple obviously.

---

## The Doctype

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  ...
```

^ The first line of code in every HTML document should be the doctype. This serves as an important reminder that even when you're designing a highly dynamic interface, you are still really just putting content into a browser window. Remember the browser is itself an interface, subject to the users configurations and preferences.

---

### Without the Doctype

- non-compliant / incompatible _quirks mode_
- error prone

^ Without a doctype declared, the browser simply doesn't know how to interpret the content and can regress into a non-compliant and incompatible mode, often called (click) _quirks mode_. Layout and interaction can become (click) error prone.

---

## The `lang` Attribute

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  ...
```

^ Next, let's look at the `html` element, which includes a `lang` attribute. The lang attribute specifies the language of the element's content.

---

## The `lang` Attribute

```html
<html lang="en"> <!-- English -->
<p lang="fr"> <!-- French -->
<quote lang="es"> <!-- Spanish -->
```

^ Common examples include _en_ for English, _fr_ for French and _es_ for Spanish. If the `doctype` tells the browser what _kind_ of document it is serving, then the `<html>` element's `lang` attribute tells it which language it is written in.

---

## The `lang` Attribute

- more indexable by search engines
- easier to translate
- helps user to _write_
- adopts synthetic voice

^ Frequently omitted, the language declaration for a web page is very important. (click) It makes the page more indexable by search engines. (click) It also makes the page easier to translate by user's operating third part tools such as Google's Translate API. (click) It also helps the user to _write_ in the page's language, for example on a `<textarea>` element, where spelling errors are highlighted.

^ If a page does not have a language declared, or the wrong language, it will not trigger the appropriate (click) synthetic voice profile when used with a screen reader.

---

## The `lang` Attribute

```html
<p>Il ne faut pas mettre tout dans le même sac!</p>
```

^ If the language attribute value is set to English, but the text is actually in French, you'd hear a voice profile called Jack doing a bad impression of French, rather than a French profile called Jaques using authentic French pronunciation.

---

## The `lang` Attribute

```html
<blockquote lang="fr">
  <p>Ceci n'est pas une pipe</p>
  <p>-- <cite>René Magritte</cite></p>
</blockquote>
```

^ It is possible to switch languages within a page using the `lang` attribute on child elements within the `<body>`. I may want to quote some French within an English language page:

---

## The `lang`

```css
:lang(fr) {
  font-family: French Font, fallback, sans-serif;
}
```

^ In my CSS I can select any sections declared as French using the `:lang` pseudo-class, applying a font well suited to the French character set, thereby improving legibility.

---

## Progressive Enhancement

$$HTML / CSS / JavaScript$$

^ Part of inclusive design is considering progressive enhancement. Progressive enhancement is about building a strong foundation of content, logical and robust in form, which is resilient to a multitude of network and scripting failures. Your pages should be well-formed and semantic HTML structures, enhanced by CSS and JavaScript. Users without JavaScript or CSS - temporarily or otherwise - should still be able to traverse and use the content.

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/progressive_enhancement.png)

^ With well structured, semantic HTML, the user has the content they are looking for and can digest the information. When CSS is available, it should be used to enhance the user's experience during that digestion process. When JavaScript is available, it should also be used to enhance the experience. An interface that relies on JavaScript to function at all and provide the user with the content is extremely exclusive.

---

## Progressive Enhancement

```html
<body>
  <h1>Hello World</h1>
  <p>Page content etc...</p>
  <script> // TODO: enhancements </script>
</body>
```

^ In a progressively enhanced setup, scripts should be inserted at the end of the document, just before the closing `</body>` tag. This allows the main [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) (Document Object Model) content to be rendered before the scripts are executed.

---

## Managing Assets

^ It is critical the resources we are using to enhance the page content do not stand in the way of that content. On slower networks, the content should arrive as soon as possible. It's what the user went to the page for.

^ Web fonts are typically large assets which should be treated as an enhancement. The trick is to load the page _then_ the font.

---

### Managing Assets - Web Fonts (Concept 1)

```html
<link
  rel="stylesheet"
  href="fonts.css"
  media="none"
  onload="if(media!='all')media='all'">

<noscript>
  <link rel="stylesheet" href="fonts.css">
</noscript>
```

^ One way to deal with fonts is to wait to load the font files until the rest of the page is loaded. That way if there's any problem with the font file loading - the user can still see and use the page content. Once the `onload` event is fired, we load the stylesheet that updates the font files.

^ Note: this technique also requires the fonts to be base64-encoded and included in the `@font-face` declaration. This example is meant to get you thinking about progressive enhancement; it is not intended to be a full working example of any particular technique.

^ DISCUSS FOUT!

---

### Managing Assets - Web Fonts (Concept 2)

```javascript
var fontA = new FontFaceObserver('DINCondensed-Bold');
var fontB = new FontFaceObserver('Roboto-Regular');

Promise.all([fontA.load(), fontB.load()]).then(function () {
    document.documentElement.className += " fonts-loaded";
    // Optimization for Repeat Views
    sessionStorage.foutFontsLoaded = true;
});
```

^ Another technique involves Javascript. Instead of waiting for all of the page to load, we can also listen for the font files to successfully load, and then apply the fonts as the page is loading.

^ Our Javascript observes the download process of the fonts, and when that process is complete, a class `fonts-loaded` is added to our document.

---

### Managing Assets - Web Fonts (Concept 2)

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}

body.fonts-loaded {
  font-family: 'Roboto-Regular', Arial, Helvetica, sans-serif;
}
```

^ Our stylesheet is setup to use the custom fonts, once that class is added to our document. If that class is never added, it means the fonts did not load properly. But it's okay because the user will still have access to the content, just in a web safe font.

---

### Managing Assets - Web Fonts (Concept 2)

```javascript
Promise.all([fontA.load(), fontB.load()]).then(function () {
    document.documentElement.className += " fonts-loaded";
    // Optimization for Repeat Views
    sessionStorage.foutFontsLoaded = true;
});
```

^ We can also use Javascript to enhance the experience by saving a variable that tells the browser on subsequent pages that the fonts have already been loaded and are available right away. Note the `sessionStorage` variable set to _true_ once the fonts have been loaded and the special class has been applied to our page.

---

### Managing Assets - Web Fonts (Concept 2)

```javascript
if (sessionStorage.foutFontsLoaded) {
  document.documentElement.className += " fonts-loaded";
  return;
}
```

^ On all of our pages, we can check if that variable is true. If it is, we can add our class and use our fonts immediately. The result is a possible FOUT on the first page load, and then an immediate load of our fonts on subsequent pages.

^ NOTE: this example is incomplete, meant only to generate discussion.

---

## THINK: How else can we manage assets efficiently?

- subset fonts
- serve optimized images
- serve optimized videos
- preload videos
- other?

---

## The `<title>` Element

Conventional practices:

- Page description |  Author and site information
- Website name | Search results for search phrase
- `<title>A Brief History of Time | Stephen Hawking</title>`

^ The `<title>` element, found in the `<head>`, should be familiar to you already. The browser displays text in the tab labeling, and search engines use this text for their results links. The title is also announced as soon as a web document is loaded, so it's an opportunity to provide a succinct summary of the page. Conventional practice is to describe the page and append author and site information.

---

## The `<main>` Element

```html
<main id="main">
  <!-- this page's unique content -->
</main>
```

^ The `<main>` element defines a region recognized and communicated by screen readers that is designated to the page's main content, which is unique content from all other pages. Screen readers offer a keyboard shortcut to access `<main>`, allowing the user to bypass a page's preamble and go straight to the content they came for.

---

![55%](http://digm.drexel.edu/crs/IDM222/presentations/images/main.png)

^ There are browser extensions available that eliminate subsidiary content in an effort to improve on screen reading experience. Has anyone ever used _Reader View_ on their iPhone or iPad?

^ Since `<main>` is designed to contain the unique content of a page, it can make writing a print style sheet easier.

---

## The `<main>` Element

```css
@media print {
  body > *:not(main) {
    display: none;
  }
}
```

---

### Skip Links

```css
[href="#main"] {
  position: absolute;
  top: 0;
  right: 100%;
}

[href="#main"]:focus {
  right: auto;
}
```

^ A skip link appears above all other content on the page and points to the main content area. The principle beneficiaries of skip links are sighted keyboard users. Skip links should not appear visually by default, we make them available to keyboard users on focus:

^ When a keyboard user enters a new page, the document itself is the first thing to receive focus. When the user hits the _Tab_ key they'll focus the first interactive element on the page: the skip link, which will reveal it visually, giving the user the option to skip to the main content. Tabbing again will hide the skip link.

^ _example: week7/skiplink.html_

---

## The Typeface

- Does it have any ornamentation that gets in the way of comprehension?
- Are the metrics (e.g. x-height) consistent between letterforms?
- Are individual letterforms distinct in shape?
- Does the typeface support all the needed characters and styles?

^ There's a lot of conflicting advice on what the characteristics of a readable body text typeface should be. One well-supported claim is that sans serif fonts are more readable than serif ones. Instead of relying on conventional wisdom, here are a few things to ask about a typeface under consideration:

---

## The Typeface

- Generous ascenders (san_**d**_y) and descenders (sand_**y**_)
- Distinction between I l 1
- _d_ and _b_ **not** an exact mirror image of one another

^ Some characteristics that can aid in legibility include:

---

![55%](http://digm.drexel.edu/crs/IDM222/presentations/images/readable_text.png)

^ Although sans serif fonts are generally thought to be more readable, their simplicity makes them more vulnerable to having similar letterforms. When selecting typefaces remember, _legible_ body text for folks with reading disorders is also _pleasant_ body text for those who have less trouble reading. One solution that works for everyone - inclusive design.

---

## Typesetting

^ Once you have your typeface selected, the focus shifts to the composition. Making provisions to measure, justification and leading will aid in overall legibility.

---

![55%](http://digm.drexel.edu/crs/IDM222/presentations/images/lines-long.png)

^ A paragraph measure is the length, in characters, of one line.

^ Lines that are to long are difficult to read because, reaching the end of the line, scanning back to find the start of the following line becomes problematic.

---

![55%](http://digm.drexel.edu/crs/IDM222/presentations/images/lines-short.png)

^ Lines that are too short require darting your eyes back and forth too frequently - something that becomes tiresome quickly.

---

### Measure

- Lines should measure between 45 and 75 characters
- `1rem` ~= width of 1 '_m_' character
- `60rem` measures @60
- 60 < 75 & > 45

^ It's recommended a measure between (click) 45 and 75 characters be used for each line. In CSS, (click) `1rem` roughly corresponds to the width of the typeface's lowercase _m_, so a paragraph which is (click) `60rem` wide could be said to have a measure of 60 - (click) right in our comfortable range.

---

![55%](http://digm.drexel.edu/crs/IDM222/presentations/images/lines-correct.png)

---

### Setting Measure

```css
main {
  max-width: 60rem;
}
```

^ Since we're building responsive layouts, content should wrap according to their containing elements. Therefore settings measure directly is unwise. Instead we use relative units so our layout remains flexible. Using `rem` units allows us to maintain the width based on the root font size, which is useful when employing media queries to adjust the layout proportionately.

---

### Setting Measure

```css
html {
  font-size: 100%;
}

main {
  max-width: 60rem;
}

@media (min-width: 120rem) {
  html {
    font-size: 150%;
  }
}
```

^ For example, where I increase the font size for wider desktop screens, the measure - which is defined using the relative `rem` unit, also increases.

^ _example: week7/typesetting_

---

### Leading (Line Height)

- "space and a half" of leading
- `font-size: 16px; line-height: 24px`
- do *not* use fixed units

^ Leading relates to the height of individual lines. It is the vertical measure between one line's baseline and next. The W3C's accessibility guideline recommends that a generous (click) "space and a half" of leading is applied to paragraphs. In CSS this can be expressed using the `line-height` property. For example, (click) if the font size is 16px, the leading should be at least 24px. Rarely should we use fixed (click) units like pixels for `line-height` declarations because it makes managing comfortable proportions a headache.

---

### Leading (Line Height)

```css
/* Don-t do this! */
p {
  font-size: 16px;
  line-height: 24px;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/leading.png)

^ When a pixel based line height is used, the line height is not relative to the font size. If the font size increases, this is the result.

---

### Leading (Line Height)

```css
/* Do this! */
p {
  font-size: 1rem;
  line-height: 1.5;
}
```

^ Now, as the paragraph font size in increased or decreased (either in a media query or by the user changing their font size settings), a comfortable, proportionate line height is ensured.

---

### Contrast

![inline](http://digm.drexel.edu/crs/IDM222/presentations/images/contrast-gray.png)

^ Many designers are enamored with pale text on a white background.

^ Low contrast combinations of text and background colors should be avoided. There are obvious readability issues, not to mention it just looks feeble. Selecting color scheme or brand colors typically happens early in a project; this is a great opportunity to test contrast from the onset of a project and make sure your color scheme is going to maximize readability for your users.

---

### Video

^ Sometimes it's just better to be _shown_ rather than told about how something works. It's simply a better way of learning certain things. Other time I might want to be told by _not_ shown, because I need to be looking at something different at the same time. In some cases, I might want to be shown _and_ told - let's say I'm on a bus without headphones handy. I want to be shown and told, without blaring audio at fellow passengers. Or perhaps I'm watching a speaker in a video that does not speak the same native language I do.

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/CC-01.png)

^ A well-captioned video is just the ticket. Captions also cater to those who are deaf and hard of hearing, but not just them. Captions are simply "another way to consume the same content".  Captions are only available if the video itself can be downloaded or streamed. This is why video that contains dialog should be accompanied by a transcript.

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/CC-01.png)

^ In the following illustration, I’ve chosen to identify the speaker with their name written in capital letters. This is not the only way to identify speakers, but whatever convention you use, make sure it is consistent. Note that the name is not needed for the second caption as the speaker has not changed.

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/CC-02.png)

^ Rupert is aware that this factoid is just an internet rumor and interjects to correct Simon on his false claim. Since Rupert is a new speaker, he must be identified. We use the same convention.

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/CC-03.png)

^ Before Rupert can finish his sentence, the two speakers are interrupted by a loud crash as the barman drops a glass (out of frame). Often, the description of such a noise is both in caps and bookended by square brackets. The barman immediately apologizes. I identify that he is out of frame by prefixing a greater-than symbol.

---

### Video Captions

```html
<video poster="thumb.jpg" preload>
    <source src="videos/curiosity.mp4" type="video/mp4">
    <source src="videos/curiosity.webm" type="video/webm">
    <track label="English Captions"
      kind="captions"
      srclang="en"
      src="video_cc_en.vtt" default>
</video>
```

---

### Video Captions

```ttml
WEBVTT

0
00:00:01.000 --> 00:00:04.000
Captions being displayed via WEBVTT track file

1
00:00:04.000 --> 00:00:07.000
But browser vendors couldn't agree on a codec
```

---

### Video Transcript

> SIMON: “Did you know the daddy long-legs spider is the most poisonous creature in the world? The thing is, though, they can’t bite you because their teeth are too weak.”
> RUPERT: “Well, actually—”
> [GLASS BREAKING]
> BARMAN (out of shot): “Sorry about that!”

^ The transcript would form the main textual content of your video posting. Sometimes it’s easier to write the transcript first, then turn the transcript into captions. In any case, it should take the form of a linearized version of the captions. The only substitution I have made, for clarity where there is no visual context, is that the barman is identified as being out of shot:

---

## Writing Better Content

^ Part of designing inclusively is the actual content. In many cases, the developer is not actually writing the content, however, you can offer guidance where appropriate and help your clients make better choices with how they write their content. Let's look at an example.

---

## Writing Better Content - Example

```html
<h2>Free, you say? Then yes, please!</h2>
```

^ What is the problem with this heading, not from a technical standpoint, but rather from the standpoint of content.

^ We have no idea what is free!

---

## Writing Better Content - Example

```html
<h2>Free, you say? Then yes, please!</h2>

<p>For the next three hours, we're
  offering free flapjacks to all customers.</p>
```

^ In the context of surrounding paragraph text, it is no doubt possible to infer what the heading is referring to. But when we extract the heading element from this context, we have no idea what is free. Direct, descriptive headings clarify the ensuing content, which aids in comprehension.

---

## Writing Better Content - Example

```html
<h2>Free flapjacks, you say? Yes, please!</h2>
```

^ This heading would be a greater utility. Extract the heading from the context and the content is still valuable enough to tell us what is free. Search engines pay close attention to these types of differences.

---

## Writing Better Content - Example 2

```html
<p>I have <a href="#">a lot</a>
  of support to back up my ideas!</p>
```

^ This link label is meaningless when taken out of context.

---

## Writing Better Content - Example 2

```html
<p>I have a lot of support to back up my ideas,
  including <a href="#">Why Phil Is Right
  by Troy Finamore</a> and <a href="#">In Support
  of Phil by Jervis Thompson</a></p>
```

---

## Writing Better Content - Example 3

```html
<p><a href="#">Click here</a> to view the video,
  <a href="#">click here</a> to read the script,
  and <a href="#">click here</a> to read the reviews.</p>
```

---

## Inclusive Conclusion

^ The goal of this discussion is to make you think about how you can write and build web applications that are available to the largest number of possible users. Shortcuts may save time now, but they come at the expense of those counting on you as the developer to keep their interests and needs in mind. No one likes feeling left out.

---

## For Next Week...

---

## Responsive Web Design Workshop

^ We will be working in teams under a time limit to develop a fluid, responsive design. Familiarize yourself with the HTML as much as possible in preparation for next week. (review `/examples/zen/index.html`)
