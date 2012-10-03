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

var baseliner = {

  init: function( selector, lineHeight, space, fontSize ) {
    this.selector = selector || 'img';
    this.fontSize = +fontSize || 16;
    this.lineHeight = +lineHeight || 24;
    this.space = +space || 0;
    this.align();
    window.onresize = baseliner.align;
  },

  align: function() {
    var el = document.querySelectorAll(baseliner.selector),
    i = 0;

    for( ; i < el.length; i++ ) {
      el[i].style.marginBottom = ((baseliner.lineHeight-(el[i].offsetHeight%baseliner.lineHeight))/baseliner.fontSize)+((baseliner.lineHeight/baseliner.fontSize)*baseliner.space)+"em";
    }
  }

};