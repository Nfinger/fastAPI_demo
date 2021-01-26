const { resourceGenerator } = require('./resource');

function plop(plop) {
  plop.setGenerator('resource', resourceGenerator);
}

module.exports = plop
