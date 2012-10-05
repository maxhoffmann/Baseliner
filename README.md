# Baseliner.js

Baseliner.js adds additional margin to odd elements on your page to maintain your baseline grid.

Baseliner adds a margin to the bottom of elements, which don’t fit to your baseline.
These elements may already have margin applied. (except inline styles)
It is written in pure JavaScript, so there is no need for you to load jQuery and it works on responsive websites.
The margin is applied as `em` to work best with websites using relative units.

Supported by all modern browsers (Chrome, Safari, Firefox, Opera, IE 9+)

Default settings:

- `selector`: 'img' (align images per default)
- `lineHeight`: 24 (desired baseline height in pixel)
- `fontSize`: 16 (font-size of parent element in pixel, 16px is the default browser font-size)

```javascript
// Apply baseline with default settings
baseliner.init();

// Apply baseline to all elements with the class '.baseliner'
baseliner.init('.baseliner');

// Apply a 28px baseline to all elements with class '.baseliner'
baseliner.init('.baseliner', 28);

// Apply a 28px baseline to all elements, which parent elements have 18px font-size and class '.baseliner' on the page
baseliner.init('.baseliner', 28, 18);
```

## License

Baseliner.js is licensed under the [WTFPL license.](http://sam.zoy.org/wtfpl/)