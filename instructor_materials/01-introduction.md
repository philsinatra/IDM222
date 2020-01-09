build-lists: true
footer: IDM 222: Web Authoring II
slidenumbers: true
autoscale: true
theme: Dark Mode

# IDM 222

## Web Design II

---

## Week 1

### Overview

---

## About This Course

- [Drexel Learn](https://learn.dcollege.net/webapps/login/)
- [Course Repository](https://github.com/philsinatra/IDM222)

^ All course information including syllabus, overview and assignments will be managed through Drexel's Blackboard (BBLearn) system. Let's log in and review the syllabus and course information now.

---

## Let's Freshen Up

---

## HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>
```

^ HTML (Hyper Text Markup Language) is a set of markup tags (or elements). Each HTML tag describes different document content. There are many available tags we can use based on the type of content we're dealing with. Think of HTML as the structure of our content - similar to the architecture of a house (foundation, walls, roof etc.). We can also add attributes like `class` and `id` for targeting groups or specific elements on our pages and applying visual styles.

---

## CSS

```css
main {
  margin: 0;
  padding: 0 20px;
}

aside {
  border: 1px solid black;
  float: right;
  margin: 0 0 10px 20px;
  padding: 0 20px;
  width: 250px;
}
```

^ CSS (Cascading Style Sheet)s are how we apply those visual styles to our pages and the elements within. The stylesheet is a set of rules made up of groups of properties and values. These rules define how everything looks on our pages. CSS is the presentation of our project - similar to the paint, wallpaper, floors etc. that make our house look and feel nice.

---

![fit](http://blog.froont.com/content/images/2014/11/08_Desktop-first-vs-Mobile-first-3.gif)

^ In IDM221 we focused on the fundamentals of web design. Structuring our content, and presenting it using the latest available CSS techniques. In IDM222 we're going to take the concepts and go back to square one, with a focus on building a new version of our original project that is fully responsive.

---

## Where is our content

- computers (desktop/notebook)
- smart phones
- tablets
- smart watches
- HDTV
- consoles
- VR devices
- projected screens

^ People access information different ways throughout the day, often starting with one device and ending with another. We need to build quality experiences that make our content available everywhere, for all users, regardless of device, internet connection speed, device preferences - and any other variables that we can think of along the way.

---

## RWD = Tool

^ Responsive web design is a tool that we as developers can use to achieve this goal.

---

## For next week
