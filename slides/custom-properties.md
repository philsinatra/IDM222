build-lists: true
footer: IDM 221: Web Authoring II
slidenumbers: true
autoscale: true
theme: Cobalt2, 1

# IDM 222

## Web Design II

### Custom Properties

---

# Objectives

- Introduce CSS Custom Properties

---

# Objective

## Introduce CSS Custom Properties

---

## Custom Properties

```css
--somekeyword: left;
--somecolor: #0000ff;
--somecomplexvalue: 3px 6px rgb(20,32,54);
```

^ Property names that are prefixed with `--`, like `--example-name`, represent custom properties that contain a value that can be used in other declarations using the `var()` function.


---

## Scope

```css
:root {
  --blue: #0000ff;
  --red: #ff0000;
}

div {
  background-color: var(--blue);
  color: var(--red);
}
```

^ Custom properties are scoped to the element(s) they are declared on, and participate in the cascade: the value of such a custom property is that from the declaration decided by the cascading algorithm.

---

## Design Systems

```css
:root {
  --black: #010101;
  --white: #fff;

  --background: var(--black);
  --foreground: var(--white);
}

@media (prefers-color-scheme: dark) {
  --background: var(--white);
  --foreground: var(--black);
}

body {
  background: var(--background);
  color: var(--foreground);
}
```

---

## Default Values

```css
/* --roundness: 2px; */
border-radius: var(--roundness, 10px);
```

^ You can include a default value when using a custom property. For example, say we give buttons a rounded border. We can create a variable — we’ll call it `--roundness` — but we won’t define it like we did before. Instead, we’ll assign a default value when putting the variable to use.

^ So, you give your button a nice default, meet your deadline and when --roundness is finally set as a global Custom Property, your button will get that update for free without needing to come back to it.

---

## Can I Use It?

- [CSS Variables (Custom Properties)](https://caniuse.com/css-variables)
