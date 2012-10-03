# Baseliner.js

Baseliner.js is a simple script, which applies a baseline to odd elements on your page.

Baseliner adds a margin to the bottom of elements, which don’t fit to your baseline. It is written in pure JavaScript, so there
is no need for you to load jQuery. The margin is applied as `em` and calculated by `lineHeight`/`fontSize`.

Default settings:

- `selector`: 'img' (align images per default)
- `lineHeight`: 24 (1.5em at default font-size)
- `space`: 0 (lines of additional margin applied)
- `fontSize`: 16 (default Browser font-size)

```javascript
// Apply baseline with default settings
baseliner.init();

// Apply baseline to all elements with the class '.baseliner'
baseliner.init('.baseliner');

// Apply a 28px baseline to all elements with class '.baseliner'
baseliner.init('.baseliner', 28);

// Apply a 28px baseline to all elements with class '.baseliner' on the page and add one baseline margin
baseliner.init('.baseliner', 28, 1);

// Apply a 28px/18px baseline to all elements with class '.baseliner' on the page and add one baseline margin
baseliner.init('.baseliner', 28, 1, 18);
```

## License

Baseliner.js is licensed under the [WTFPL license.](http://sam.zoy.org/wtfpl/)