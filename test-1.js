let sinon = require('sinon');

global.foo = function () {};

let sandbox = sinon.sandbox.create();
let stub = sandbox.stub(global);