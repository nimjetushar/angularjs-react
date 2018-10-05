routerConfig.$inject = ['$stateProvider'];

export default function routerConfig($stateProvider) {
  var helloState = {
    name: "hello",
    url: "/",
    component: "landingComponent"
  };

  $stateProvider.state(helloState);
}
