require('shelljs/make');

var htmlprocessor = require('./node_modules/htmlprocessor/index')
  , libs
  , src;

// add your libraries here, e.g.:
// lib = [//'src/bower_components/lib/lib.js'];

// add your source files here; e.g.:
src = [
  'src/js/app.js'
];

target.clean = function () {
  cd(__dirname);
  rm('-rf', 'build');
  rm('-rf', 'coverage');
};

target.bundle = function () {
  target.clean();
  
  cd(__dirname);
  
  mkdir('build');
  // minify js
  // exec('node node_modules/uglify-js/bin/uglifyjs ' + lib.join(' ') + ' -o build/lib.js -m -c \'warnings=false\' --screw-ie8');
  
  exec('node node_modules/uglify-js/bin/uglifyjs ' + src.join(' ') + ' -o build/app.js -m -c \'warnings=false\' --screw-ie8');

  // process html
  htmlprocessor({src: ['./src/index.html'], dest: 'build/index.html'});
};

target.all = function () {
  target.bundle();
};



