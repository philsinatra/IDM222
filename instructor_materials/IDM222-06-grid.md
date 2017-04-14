build-lists: true
footer: IDM 222: Web Authoring II
slidenumbers: true
autoscale: true
theme: Plain Jane, 2

# IDM 222

## Web Design II

---

# Week 6

## CSS Grid

^ CSS Grid Layout (aka "Grid"), is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces. CSS has always been used to lay out our web pages, but it's never done a very good job of it. First we used tables, then floats, positioning and inline-block, but all of these methods were essentially hacks and left out a lot of important functionality (vertical centering, for instance). Flexbox helped out, but it's intended for simpler one-dimensional layouts, not complex two-dimensional ones (Flexbox and Grid actually work very well together). Grid is the very first CSS module created specifically to solve the layout problems we've all been hacking our way around for as long as we've been making websites.

---

## [Can I Use It?](http://caniuse.com/#feat=css-grid)

^ Grid is one of the most powerful CSS modules ever introduced. As of March 2017, Grid is available in Chrome, Firefox, Safari and iOS Safari. Internet Explorer 10 and 11 on the other hand support it, but it's an old implementation with an outdated syntax. We'll need to use some vendor prefixes to get it working properly.

---

## Terminology

^ Before diving into the concepts of Grid it's important to understand the terminology. Since the terms involved here are all kinda conceptually similar, it's easy to confuse them with one another if you don't first memorize their meanings defined by the Grid specification.

---

### Grid Container

```html
<div class="container">
  <div class="item item-1"></div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
</div>
```

^ The element on which `display: grid` is applied. It's the direct parent of all the grid items. In this example `container` is the grid container.

---

### Grid Item

```html
<div class="container">
  <div class="item"></div>
  <div class="item">
  	<p class="sub-item"></p>
  </div>
  <div class="item"></div>
</div>
```

^ The children (e.g. _direct_ descendants) of the grid container. Here the `item` elements are grid items, but `sub-item` isn't.

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-line.png)

^ Grid Line

^ The dividing lines that make up the structure of the grid. They can be either vertical ("column grid lines") or horizontal ("row grid lines") and reside on either side of a row or column. Here the yellow line is an example of a column grid line.

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-track.png)

^ Grid Track

^ The space between two adjacent grid lines. You can think of them like the columns or rows of the grid. Here's the grid track between the second and third row grid lines.

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-cell.png)

^ Grid Cell

^ The space between two adjacent row and two adjacent column grid lines. It's a single "unit" of the grid. Here's the grid cell between row grid lines 1 and 2, and column grid lines 2 and 3.

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-area.png)

^ Grid Area

^ The total space surrounded by four grid lines. A grid area may be comprised of any number of grid cells. Here's the grid area between row grid lines 1 and 3, and column grid lines 1 and 3.

---

## Properties for the Parent

### (Grid Container)

---

### `display`

```css
.container {
  display: grid | inline-grid | subgrid;
}
```

^ Defines the element as a grid container and establishes a new grid formatting context for its contents.

^ Values:

^ `grid` - generates a block-level grid

^ `inline-grid` - generates an inline-level grid

^ `subgrid` - if your grid container is itself a grid item (i.e. nested grids), you can use this property to indicate that you want the sizes of its rows/columns to be taken from its parent rather than specifying its own.

^ Note: column, float, clear, and vertical-align have no effect on a grid container.

---

### `grid-template-columns` & `grid-template-rows`

```css
.container {
  grid-template-columns: <track-size> ... | <line-name> <track-size> ...;
  grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
}
```

^ Defines the columns and rows of the grid with a space-separated list of values. The values represent the track size, and the space between them represents the grid line.

^ Values:

^ <track-size> - can be a length, a percentage, or a fraction of the free space in the grid (using the `fr` unit)

^ <line-name> - an arbitrary name of your choosing

---

#### Examples:

```css
.container{
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
}
```

^ When you leave an empty space between the track values, the grid lines are automatically assigned numerical names:

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-numbers.png)

---

#### Examples

```css
.container {
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}
```

^ But you can choose to explicitly name the lines. Note the bracket syntax for the line names:

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-names.png)

---

#### Examples

```css
.container{
  grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end];
}
```

---

#### Examples

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
}
```

^ The `fr` unit allows you to set the size of a track as a fraction of the free space of the grid container. For example, this will set each item to one third the width of the grid container:

---

#### Examples

```css
.container {
  grid-template-columns: 1fr 50px 1fr 1fr;
}
```

^ The free space is calculated _after_ any non-flexible items. In this example the total amount of free space available to the `fr` units doesn't include the 50px:

---

## `grid-template-areas`

```css
.container {
  grid-template-areas:
    "<grid-area-name> | . | none | ..."
    "...";
}
```

^ Defines a grid template by referencing the names of the grid areas which are specified with the `grid-area` property. Repeating the name of a grid area causes the content to span those cells. A period signifies an empty cell. The syntax itself provides a visualization of the structure of the grid.

^ Values:

^ <grid-area-name> - the name of a grid area specified with grid-area

^ `.` - a period signifies an empty grid cell

^ `none` - no grid areas are defined

---

### Example

```css
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}
```

---

### Example

```css
.container {
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
```

^ That'll create a grid that's four columns wide by three rows tall. The entire top row will be comprised of the **header** area. The middle row will be comprised of two **main** areas, one empty cell, and one **sidebar** area. The last row is all **footer**.

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-areas.png)

^ Each row in your declaration needs to have the same number of cells

---

## `grid-column-gap` & `grid-row-gap`

```css
.container {
  grid-column-gap: <line-size>;
  grid-row-gap: <line-size>;
}
```

^ Specifies the size of the grid lines. You can think of it like setting the width of the gutters between the columns/rows.

^ Values:

^ <line-size> - a length value

---

### Example

```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-gap.png)

^ The gutters are only created between the columns/rows, not on the outer edges.

---

## `grid-gap`

```css
.container {
  grid-gap: <grid-row-gap> <grid-column-gap>;
}
```

^ A shorthand for grid-row-gap and grid-column-gap

^ Values:

^ <grid-row-gap> <grid-column-gap> - length values

---

### Example

```css
.container{
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;
  grid-gap: 10px 15px;
}
```

^ If no `grid-column-gap` is specified, it's set to the same value as `grid-row-gap`.

---

## `justify-items`

```css
.container {
  justify-items: start | end | center | stretch;
}
```

^ Aligns the content inside a grid item along the row axis (as opposed to `align-items` which aligns along the _column_ axis). This value applies to all grid items inside the container.

^ Values:

^ **start** - aligns the content to the left end of the grid area

^ **end** - aligns the content to the right end of the grid area

^ **center** - aligns the content in the center of the grid area

^ **stretch** - fills the whole width of the grid area (this is the default)

---

## Example - Start

```css
.container {
  justify-items: start;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_items-start.png)

---

## Example - End

```css
.container{
  justify-items: end;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_items-end.png)

---

## Example - Center

```css
.container{
  justify-items: center;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_items-center.png)

---

## Example - Stretch

```css
.container{
  justify-items: stretch;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_items-stretch.png)

^ This behavior can also be set on individual grid items via the `justify-self` property.

---

## `align-items`

```css
.container {
  align-items: start | end | center | stretch;
}
```

^ Aligns the content inside a grid item along the column axis (as opposed to justify-items which aligns along the row axis). This value applies to all grid items inside the container.

^ Values:

^  **start** - aligns the content to the top of the grid area

^  **end** - aligns the content to the bottom of the grid area

^  **center** - aligns the content in the center of the grid area

^  **stretch** - fills the whole height of the grid area (this is the default)

---

## Example - Start

```css
.container {
  align-items: start;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-align_items-start.png)

---

## Example - End

```css
.container {
  align-items: end;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-align_items-end.png)

---

## Example - Center

```css
.container {
  align-items: center;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-align_items-center.png)

---

## Example - Stretch

```css
.container {
  align-items: stretch;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_content-stretch.png)

^ This behavior can also be set on individual grid items via the align-self property.

---

## `justify-content`

```css
.container {
  justify-content: start
                   end
                   center
                   stretch
                   space-around
                   space-between
                   space-evenly;
}
```

^ Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like `px`. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the row axis (as opposed to `align-content` which aligns the grid along the _column_ axis).

^ Values:

^ **start** - aligns the grid to the left end of the grid container

^ **end** - aligns the grid to the right end of the grid container

^ **center** - aligns the grid in the center of the grid container

^ **stretch** - resizes the grid items to allow the grid to fill the full width of the grid container

^ **space-around** - places an even amount of space between each grid item, with half-sized spaces on the far ends

^ **space-between** - places an even amount of space between each grid item, with no space at the far ends

^ **space-evenly** - places an even amount of space between each grid item, including the far ends

---

## Example - Start

```css
.container {
  justify-content: start;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_content-start.png)

---

## Example - End

```css
.container {
  justify-content: end;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_content-end.png)

---

## Example - Center

```css
.container {
  justify-content: center;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_content-center.png)

---

## Example - Stretch

```css
.container {
  justify-content: stretch;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_content-stretch.png)

---

## Example - Space Around

```css
.container {
  justify-content: space-around;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_content-space_around.png)

---

## Example - Space Between

```css
.container {
  justify-content: space-between;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_content-space_between.png)

---

## Example - Space Evenly

```css
.container {
  justify-content: space-evenly;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_content-space_evenly.png)

---

## `align-content`

```css
.container {
  align-content: start
                 end
                 center
                 stretch
                 space-around
                 space-between
                 space-evenly;
}
```

^ Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the column axis (as opposed to justify-content which aligns the grid along the row axis).

^ Values:

^ start - aligns the grid to the top of the grid container

^ end - aligns the grid to the bottom of the grid container

^ center - aligns the grid in the center of the grid container

^ stretch - resizes the grid items to allow the grid to fill the full height of the grid container

^ space-around - places an even amount of space between each grid item, with half-sized spaces on the far ends

^ space-between - places an even amount of space between each grid item, with no space at the far ends

^ space-evenly - places an even amount of space between each grid item, including the far ends

---

## Example - Start

```css
.container {
  align-content: start;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-align_content-start.png)

---

## Example - End

```css
.container {
  align-content: end;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-align_content-end.png)

---

## Example - Center

```css
.container {
  align-content: center;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-align_content-center.png)

---

## Example - Stretch

```css
.container {
  align-content: stretch;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-align_content-stretch.png)

---

## Example - Space Around

```css
.container {
  align-content: space-around;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-align_content-space_around.png)

---

## Example - Space Between

```css
.container {
  align-content: space-between;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-align_content-space_between.png)

---

## Example - Space Evenly

```css
.container {
  align-content: space-evenly;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-align_content-space_evenly.png)

---

## Properties for the Children

### (Grid Items)

---

`grid-column-start grid-column-end grid-row-start grid-row-end`

```css
.item {
  grid-column-start: <number> | <name> | span <number> | span <name> | auto
  grid-column-end: <number> | <name> | span <number> | span <name> | auto
  grid-row-start: <number> | <name> | span <number> | span <name> | auto
  grid-row-end: <number> | <name> | span <number> | span <name> | auto
}
```

^ Determines a grid item's location within the grid by referring to specific grid lines. `grid-column-start`/`grid-row-start` is the line where the item begins, and `grid-column-end`/`grid-row-end` is the line where the item ends.

^ Values:

^ **<line>** - can be a number to refer to a numbered grid line, or a name to refer to a named grid line
^ **span <number>** - the item will span across the provided number of grid tracks
^ **span <name>** - the item will span across until it hits the next line with the provided name
^ **auto** - indicates auto-placement, an automatic span, or a default span of one

---

## Examples

```css
.item-a {
  grid-column-start: 2;
  grid-column-end: five;
  grid-row-start: row1-start
  grid-row-end: 3
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-column_row-1.png)

---

## Examples

```css
.item-b {
  grid-column-start: 1;
  grid-column-end: span col4-start;
  grid-row-start: 2
  grid-row-end: span 2
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-column_row-2.png)

---

### Notes

- If no grid-column-end/grid-row-end is declared, the item will span 1 track by default.
- Items can overlap each other. You can use z-index to control their stacking order.

---

## `justify-self`

```css
.item {
  justify-self: start | end | center | stretch;
}
```

^ Aligns the content inside a grid item along the row axis (as opposed to align-self which aligns along the column axis). This value applies to the content inside a single grid item.

^ Values:

^ **start** - aligns the content to the left end of the grid area

^ **end** - aligns the content to the right end of the grid area

^ **center** - aligns the content in the center of the grid area

^ **stretch** - fills the whole width of the grid area (this is the default)

---

## Example - Start

```css
.item-a {
  justify-self: start;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_self-start.png)

---

## Example - End

```css
.item-a {
  justify-self: end;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_self-end.png)

---

## Example - Center

```css
.item-a {
  justify-self: center;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_self-center.png)

---

## Example - Stretch

```css
.item-a {
  justify-self: stretch;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_self-stretch.png)

---

## `align-self`

```css
.item {
  align-self: start | end | center | stretch;
}
```

^ Aligns the content inside a grid item along the column axis (as opposed to justify-self which aligns along the row axis). This value applies to the content inside a single grid item.

^ Values:

^ **start** - aligns the content to the top of the grid area

^ **end** - aligns the content to the bottom of the grid area

^ **center** - aligns the content in the center of the grid area

^ **stretch** - fills the whole height of the grid area (this is the default)

---

## Example - Start

```css
.item-a {
  align-self: start;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-align_self-start.png)

---

## Example - End

```css
.item-a {
  align-self: end;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-align_self-end.png)

---

## Example - Center

```css
.item-a {
  align-self: center;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-align_self-center.png)

---

## Example - Stretch

```css
.item-a {
  align-self: stretch;
}
```

---

![fit](http://digm.drexel.edu/crs/IDM222/presentations/images/grid-justify_self-stretch.png)

---

## References

- [CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
