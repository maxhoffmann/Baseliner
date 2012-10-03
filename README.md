# Baseliner.js

Baseliner.js is a simple script, which applies a baseline to odd elements on your page.

Baseliner adds a margin to the bottom of elements, which don’t fit to your baseline. It is written in pure JavaScript, so there
is no need for you to load jQuery. The margin is applied as `em` and calculated by `lineHeight`/`fontSize`.

Default settings:

- `class`: '.baseliner'
- `lineHeight`: 24, (1.5em at default fontSize)
- `space`: 0,
- `fontSize`: 16 (default Browser font-size)

```javascript
baseliner.init();                // Apply default baseline to all elements with the class '.baseliner' on the page
baseliner.init('.align');        // Apply default baseline to all elements with class '.align' on the page
baseliner.init('.align', 28, 1); // Apply a 28px (1.75em) baseline to all elements with class '.align' on the page and add one line margin
```

## License

Baseliner.js is licensed under the [WTFPL license.](http://sam.zoy.org/wtfpl/)