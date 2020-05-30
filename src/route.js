export default function routerConfig(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
) {
  $locationProvider.hashPrefix('');
  // $locationProvider.html5Mode(true);   // using this html 5 mode is enabled
  $urlRouterProvider.otherwise('/landing');

  $stateProvider
    .state('landing', {
      component: 'landingComponent',
      url: '/landing'
    })
    .state('about.**', {
      resolve: {
        abouteModule: ['$q', '$ocLazyLoad', '$state', ($q, $ocLazyLoad, $state) => {
          const deferred = $q.defer();
          require.ensure([], () => {
            const module = require('./about/aboutModule.js');
            $ocLazyLoad.load({
              name: module.default.name
            });
            $state.go('about');
            deferred.resolve(module);
          });
          return deferred.promise;
        }]
      },
      url: '/about'
    })
    .state('help', {
      controller: 'helpCtrl',
      templateUrl: './help/help.html',
      url: '/help'
    });
}

routerConfig.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'
];
