import routerConfig from "./route";
import parentController from "./parentController";
import landingComponent from "./landing/landingComponent";


angular
  .module("angularReact", ["ui.router"])
  .config(routerConfig)
  .controller("parentController", parentController)
  .component("landingComponent", landingComponent);

angular.element(function() {
  angular.bootstrap(document, ["angularReact"]);
});
