
module.exports = function(content) {
  this._module._nodeType = 'module';
  this._module._moduleType = 'style';
  this._cmlSource = content;
  return `module.exports = ${JSON.stringify(content)}`
}