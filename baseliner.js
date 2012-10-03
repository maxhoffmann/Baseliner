/**
 * Baseliner 1.0
 *
 * by Maximilian Hoffmann
 *
 * maximilianhoffmann.com
 *
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 */

var baseliner = (function() {

  var align = function() {
    var el = document.querySelectorAll(_baseliner.selector),
    i = 0;

    for( ; i < el.length; i++ ) {
      el[i].style.marginBottom = ((_baseliner.lineHeight-(el[i].offsetHeight%_baseliner.lineHeight))/_baseliner.fontSize)+((_baseliner.lineHeight/_baseliner.fontSize)*_baseliner.space)+"em";
    }
  },

  _baseliner = {
    init: function( selector, lineHeight, space, fontSize ) {
      this.selector = selector || 'img';
      this.fontSize = +fontSize || 16;
      this.lineHeight = +lineHeight || 24;
      this.space = +space || 0;
      align();
      window.addEventListener('resize', align, false);
    }
  };

  return _baseliner;

})();