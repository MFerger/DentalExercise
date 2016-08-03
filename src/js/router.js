var Router = (
  function($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
      .state('home', {
        url: '/',
        template: '@@import _home.html',
        controllerAs: 'vm',
        controller: 'HomeController'
      })

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }
);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
module.exports = Router;
