'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var WhateverGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    // this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    // this.log(chalk.magenta('You\'re using the fantastic Frameworkless generator.'));
    this.log(chalk.magenta('Welcome to the frameworkless generator.'));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'What\'s the name of your application'
    }];

    this.prompt(prompts, function (props) {
      this.projectName = props.projectName || ' ';
      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('src');
    this.mkdir('src/js');

    this.mkdir('test');
    this.mkdir('test/unit');

    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.copy('_make.js', 'make.js');

  },

  projectfiles: function () {
    this.copy('bowerrc', '.bowerrc');
    this.copy('editorconfig', '.editorconfig');
    this.copy('eslintrc', '.eslintrc');
    
    // this.copy('gitattributes', '.gitattributes');
    // this.copy('gitignore', '.gitignore');
    
    this.template('src/index.html', 'src/index.html');
    this.copy('src/js/app.js', 'src/js/app.js');

    this.copy('test/karma.conf.js', 'test/karma.conf.js');
    this.copy('test/unit/app_test.js', 'test/unit/app_test.js');
  }
});

module.exports = WhateverGenerator;
