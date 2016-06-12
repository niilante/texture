'use strict';

var Ref = require('./Ref');
var RefComponent = require('./RefComponent');
var RefTarget = require('./RefTarget');
var RefJATSConverter = require('./RefJATSConverter');

module.exports = {
  name: 'ref',
  configure: function(config) {
    config.addNode(Ref);
    config.addComponent(Ref.static.name, RefComponent);
    config.addComponent(Ref.static.name+'-target', RefTarget);
    config.addConverter('jats', RefJATSConverter);
  }
};