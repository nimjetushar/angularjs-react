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
    .state("about", {
      url: "/about",
      lazyLoad: function($transition$) {
        const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

        return import("./about/aboutComponent.js")
          .then(mod => $ocLazyLoad.load(mod.default))
          .catch(err => {
            throw new Error("Ooops, something went wrong, " + err);
          });
      }
    })
    .state("help", {
      url: "/help",
      templateUrl: "./help/help.html",
      controller: "helpCtrl"
    });
}
