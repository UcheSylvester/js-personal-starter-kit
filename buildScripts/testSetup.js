
// registering babel to transpile before our test is ran
require('babel-register')();

// disabling webpack features that mocha doesn't understand,
// by setting css files to an empty function
require.extensions['.css'] = function() {}
