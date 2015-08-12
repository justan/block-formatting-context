var tape = require('tape')
var doc = require('global/document')

var bfc = require('../')

var el = doc.createElement('div')

var box = doc.createElement('div')

box.appendChild(el)

doc.body.appendChild(box)


tape('bfc parent', function(t) {
  t.equal(bfc.getBFCParent(el), doc)

  box.style.float = 'left'

  t.equal(bfc.getBFCParent(el), box)

  t.end()
})
