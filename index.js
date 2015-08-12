/**
 * Block formatting context detect
 * https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
 */

var bfc = {
  /**
   * Get element's bfc parent
   * @param  {Element} el
   * @return {Element} bfc parent
   */
  getBFCParent: function(el) {
    var node = el

    while (el = el.parentNode) {
      node = el
      if( bfc.isBFC(node) ) {
        return node
      }
    }
    return node
  },

  /**
   * Detect element is bfc element or not
   * @param  {Element} el
   * @return {Boolean}
   */
  isBFC: function(el) {
    try{
      var display = getCurrentStyle(el, 'display')
      var position = getCurrentStyle(el, 'position')
      var float = getCurrentStyle(el, 'float')
      var overflow = getCurrentStyle(el, 'overflow')
    }catch(e) {
      return true
    }

    return float !== 'none' || overflow !== 'visible'
      || position === 'absolute' || position === 'fixed'
      || display === 'inline-block'
      || display === 'table-cell' || display === 'table-caption'
      || display === 'flex' || display === 'inline-flex'
  }
}

function getCurrentStyle(el, style) {
  if(typeof getComputedStyle === 'undefined') {
    return el.currentStyle[style]
  }else{
    return getComputedStyle(el).getPropertyValue(style)
  }
}

module.exports = bfc
