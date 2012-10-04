/**
 * Baseliner 1.1
 *
 * by Maximilian Hoffmann
 *
 * maximilianhoffmann.com
 *
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 **/

var baseliner = {

  init: function( selector, lineHeight, fontSize ) {
    this.selector = selector || 'img';
    this.fontSize = +fontSize || 16;
    this.lineHeight = +lineHeight || 24;
    if ( window.getComputedStyle ) {
      this.align();
      window.onresize = baseliner.align;
    }
  },

  align: function() {
    var el = document.querySelectorAll(baseliner.selector),
    i = 0;

    for( ; i < el.length; i++ ) {
      el[i].style.marginBottom = '';
      el[i].style.marginBottom = (+window.getComputedStyle(el[i],null).getPropertyValue('margin-bottom').slice(0,-2)/baseliner.fontSize)+((baseliner.lineHeight-(el[i].offsetHeight%baseliner.lineHeight))/baseliner.fontSize)+"em";
    }
  }

};