routerConfig.$inject = [
  "$stateProvider",
  "$urlRouterProvider",
  "$locationProvider"
];

export default function routerConfig(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
) {
  $locationProvider.hashPrefix("");
  // $locationProvider.html5Mode(true);   // using this html 5 mode is enabled
  $urlRouterProvider.otherwise("/landing");

  $stateProvider
    .state("landing", {
      url: "/landing",
      component: "landingComponent"
    })
    .state("about.**", {
      url: "/about",
      resolve: {
        abouteModule: ['$q', '$ocLazyLoad', '$state', function ($q, $ocLazyLoad, $state) {
          let deferred = $q.defer();
          require.ensure([], function () {
            let module = require('./about/aboutModule.js');
            $ocLazyLoad.load({
              name: module.default.name
            });
            $state.go("about");
            deferred.resolve(module);
          });
          return deferred.promise;
        }]
      }
    })
    .state("help", {
      url: "/help",
      templateUrl: "./help/help.html",
      controller: "helpCtrl"
    });
}