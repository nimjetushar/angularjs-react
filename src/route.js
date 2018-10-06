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
  // $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/landing");

  $stateProvider
    .state("landing", {
      url: "/landing",
      component: "landingComponent"
    })
    .state("about", {
      url: "/about",
      component: "aboutComponent"
    });
}
