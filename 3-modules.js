// CommonJS, every file is a module (by default)
// Modules - Encapuslated code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data  = require('./6-alternate-export')
require('./7-mind-grenade')
console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)