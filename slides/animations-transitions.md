build-lists: true
footer: IDM 221: Web Authoring II
slidenumbers: true
autoscale: true
theme: Cobalt2, 1

# IDM 222

## Web Design II

### CSS Transitions, Transforms, Animations & Filters

---

# Objectives

- Introduce CSS Transitions
- Introduce CSS Transformations
- Introduce CSS Animations
- Introduce CSS Filters

---

# Objective

## Introduce CSS Transitions

---

## CSS Transition Properties

```tex
transition                  shorthand
transition-property         property(s) used
transition-duration         (milli)seconds
transition-timing-function  speed curve
transition-delay            (milli)seconds before start
```

^ _Transitions_ let you gradually change one or more of the CSS properties for an element over a specified period of time. As you'll see, transitions let you provide features with CSS3 alone that would otherwise require JavaScript and jQuery.

^ Here are the five properties that can be used for transitions. The shorthand _transition_ property is the easiest to code. The _transition-property_ specifies the property(s) that the transition is for. Use commas to separate multiple CSS properties. The _transition-duration_ specifies the seconds or milliseconds that the transition will take. The _transition-timing-function_ specifies the speed curve of the transition. Values include: ease, linear, ease-in, ease-out, ease-in-out and cubic-bezier. The _transition-delay_ specifies the seconds or milliseconds before the transition starts.

---

## Transition Syntax

```css
transition: [property] [duration] [timing-function] [delay];
```

```css
a {
  color: blue;
  font-size: 100%;
  transition: color 2s ease-in 1s,
              font-size 2s ease-out 1s;
}
a:hover {
  color: red;
  font-size: 120%;
}
```

^ This is the CSS syntax for coding the shorthand _transition_ property for any element. In this first example we use a transition for the change in two properties that are applied to an `a` element: color and font-size. The rule set for the `a` selector sets the font-size to 100% and the color to blue. Then the shorthand transition property provides two sets of values that are separated by commas.

---

[.code-highlight: 4-5]

## Transition Syntax Example

```css
a {
  color: blue;
  font-size: 100%;
  transition: color 2s ease-in 1s,
              font-size 2s ease-out 1s;
}
a:hover {
  color: red;
  font-size: 120%;
}
```

^ The first set of values is for the color property. It says that the transition should take two seconds, use the _ease-in_ timing function (or speed curve), and wait one second before starting. The second is for the font-size property and is basically the same other than the timing function here will _ease-out_.

---

[.code-highlight: 7-10]

## Transition Syntax Example Continued

```css
a {
  color: blue;
  font-size: 100%;
  transition: color 2s ease-in 1s,
              font-size 2s ease-out 1s;
}
a:hover {
  color: red;
  font-size: 120%;
}
```

^ The rule set is followed by one for the hover pseudo-class for the `a` element.

^ It changes the color to red, and the font-size to 120%. This means when the user hovers the mouse over the anchor element, the two values in the transition are changed. As a result, the transition takes place. When the user stops hovering, the transition returns to the original state.

^ Let's test this in a browser. (_examples/animations-transitions/01-transitions.html_)

---

## Great, Can I Use Transitions

[Can I Use It?](http://caniuse.com#feat=css-transitions)

^ Whenever CSS3 techniques are being used, it's important to check current browser support information so you know where your techniques will work, and where you have to work around lack of support or feature bugs.

---

> Practical Application

^ Adding transitions is a great way to give your content more personality and provide the user a more enjoyable experience. Transitions can also help with functionality, and provide a simpler, faster method of programming. Let's look at another example. (_examples/animations-transitions/02-transitions-accordion.html_)

---

# Objective

## Introduce CSS Transformations

---

### 2D Transforms

```tex
transform          Applies transform methods
transform-origin   Changes the default origin point
```

^ _Transforms_ let your rotate, scale, skew and position HTML elements using CSS code.

^ When you combine transforms with transitions, you can create some interesting animations for your HTML elements.

^ The transform property lets you apply one or more transforms to an HTML element. The transform-origin property lets you change the origin point for the transform. Methods for 2D transformations include rotate, scale, skew, translate and matrix (which let your do all the other methods in a single method).

---

## 2D Transform Example

```html
<p>
  <img src="image01.jpg"><img src="image01.jpg" class="image">
</p>
```

```css
.image {
  transition: 2s;
}
.image:hover {
  transform: rotateY(180deg);
}
```

^ In this example, there are two copies of the same image displayed side by side. Then, when the user hovers the mouse over the image on the right, it is rotated 180 degrees. As a result, it looks like a mirror image of the image on the left. (_examples/animations-transitions/03-transform.html_)

---

## Learning Transforms

![fit](http://www.lovethisgif.com/uploaded_images/61540-Girl_shaking_science_experiment.gif)

^ The best way to understand what these transforms can do is to experiment. Let's look at some more examples of 2D transformations. (**open** _examples/animations-transitions/04-transform-gallery.html_)

---

## 3D Transforms

[Examples](http://desandro.github.io/3dtransforms/)

---

## Great, Can I Use 3D Transforms

[Can I Use It?](http://caniuse.com/#feat=transforms3d)

---

# Objective

## Introduce CSS Animations

---

## CSS Animation Properties

```tex
animation                 shorthand
animation-name            name of the @keyframes rule
animation-duration        (milli)seconds length
animation-delay           (milli)seconds before start
animation-iteration-count repeat count
animation-timing-function speed of the curve
animation-direction       normal, reverse, or alternate
```

^ Of the six values that the animation property can include, the values for duration, delay and timing function work the same as they do for a transition. The value for iteration count is the number of times the animation should be run. And the value for direction is the direction in which the animation should be run. The other value is the _@keyframes_ selector rule. Within this rule you define the keyframes for the animation sequence.

---

## CSS Animation Shorthand Syntax

```css
h1 {
  animation: [name]
             [duration]
             [timing-function]
             [delay]
             [iteration-count]
             [direction]
}
```

^ This is the shorthand syntax for the property.

---

```css
h1 {
  animation: moveright 3s ease-in-out 2s infinite alternate;
}

@keyframes moveright {
  from {
    color: blue;
    margin-left: 20%;
  }
  to {
    color: red;
    margin-left: 60%;
  }
}
```

^ In this example, the color and left margin are changed over a duration of three seconds. The result is the animation moves the heading from left to right and changes the color from blue to red. The animation property for the `h1` element points to _moveright_. It also says each repetition should take three seconds, the start of the animation should be delayed two seconds, the animation should keep repeating using the _ease-in-out_ speed curve and that the first animation will move left to right, the second from right to left, and so on.

---

```css
@keyframes moveright {
  from {
    color: blue;
    margin-left: 20%;
  }
  to {
    color: red;
    margin-left: 60%;
  }
}
```

^ The _@keyframes_ selector rule illustrates one way that the keyframes can be defined. You use the _from_ group to set the properties for the first frame and the _to_ group to set the properties for the last frame. The browser fills in the "in-between" frames for you. This is known as _tweening_. Let's build our example. (_examples/animations-transitions/05-animation-fade.html_)

---

## CSS Animation Keyframes

```css
@keyframes myAnimation {
  0% {}
  50% {}
  100% {}
}
```

^ For a finer level of control, your _keyframes_ can be setup using various percentage points. Let's build another example. (_examples/animations-transitions/06-animation.html_)

---

## CSS Animation Examples

- [Solar System](http://codepen.io/juliangarnier/full/idhuG/)
- [Periodic Table](http://threejs.org/examples/css3d_periodictable.html)
- [Cat](http://roxik.com/cat/)

^ Animations can be simple or complex. Let's look at some other examples online.

---

## Great. Can I Use CSS Animations

[Can I Use It?](http://caniuse.com/#feat=css-animation)

---

# Objective

## Introduce CSS Filters

---

## CSS Filters

### CSS Filters Syntax

```css
image {
  filter: [filtermethod(value)];
}
```

^ _Filters_ let you change the appearance of images after they've been loaded into the browser without changing the image files. You can convert an image to grayscale or blur an image.

^ There are various filters available. We'll look at a couple examples here. Research online to find a full list of available filters and the values that are accepted for each.

^ (_02/06-filters.html_)

---

## Great. Can I Use CSS Filters

[Can I Use It?](http://caniuse.com/#search=filter)
