require('shelljs/make');

var htmlprocessor = require('./node_modules/htmlprocessor/index')
  , libs
  , src;

lib = [
  // add your libraries here, e.g.:
  // 'src/bower_components/angular/angular.js'
];

src = [
  // add your source files here; e.g.:
  // 'src/js/app.js'
];

target.clean = function () {
  cd(__dirname);
  rm('-rf', 'build');
  rm('-rf', 'coverage');
};

target.bundle = function () {
  target.clean();
  
  cd(__dirname);
  

  // minify js
  // exec('node node_modules/uglify-js/bin/uglifyjs ' + 
  //   lib.join(' ') + ' -o build/lib.js -m -c \'warnings=false\' --screw-ie8');

  // exec('node node_modules/uglify-js/bin/uglifyjs ' +
  //   src.join(' ') + '  -o build/src.js -m -c \'warnings=false\' --screw-ie8');

  // prepare html
  // htmlprocessor({src: ['./src/index.html'], dest: 'build/index.html'});

};

target.all = function () {
  target.bundle();
};



