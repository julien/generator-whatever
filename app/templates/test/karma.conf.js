
module.exports = function(config) {
  config.set({

    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      'src/js/**/*.js',
      'test/**/*_test.js'
    ],

    // list of files to exclude
    // exclude: [],

    preprocessors: {
      'src/js/**/**.js': ['coverage']
    },

    reporters: ['dots', 'coverage'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    port: 9876,
    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
