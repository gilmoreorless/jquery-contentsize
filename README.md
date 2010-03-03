jQuery Content Size plugin
================================

Get the total width/height of an element's children

This plugin is for getting the real dimensions of an element's children, which don't always match the parent's width and height.

The most common use case would a parent (eg. `<ul>`) with a set height and CSS style of `overflow:hidden`.
If the `<ul>` has a variable number of child `<li>` elements, there is no standard way to get the total height of the `<li>` children.

With this plugin, simply type:

`$('ul').contentHeight();`


Function Reference
---------------------------------------

Three functions are provided:

* `contentWidth()` - Get total width of all the given element's children (returns `int`)
* `contentHeight()` - Get total height of all the given element's children (returns `int`)
* `contentSize()` - Get total width and height of all the given element's children (returns `{width:int, height:int}`)

All three functions work by looping through the child elements and for each one,
it adds the child's left/top offset to its outerWidth/Height, then returns the maximum combined value.

All functions also accept an optional first parameter for quick mode.
If set to true, the function will get the dimensions of the last child only for a speed increase,
since in most cases all the children will be in a single line either horizontally or vertically.

eg. `$('ul').contentHeight(true); // Enables quick mode`

**Note:** All values returned include the children's margin values
