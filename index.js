module.exports = literally
function literally(val) {
  return function() { return val }
}

var desync = require('desync')
literally.async =
function literallyAsync(val) {
  return desync(literally(val))
}
