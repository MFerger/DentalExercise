var angular = require('angular');
require('angular-ui-router');

var HomeController = require('./controllers/HomeController');
var Router = require('./router');

angular
  .module('app', ['ui.router'])
  .controller( 'HomeController', HomeController )
  .config( Router );
