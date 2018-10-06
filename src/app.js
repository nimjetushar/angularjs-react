import angular from "angular";
import uiRouter from "@uirouter/angularjs";

import routerConfig from "./route";
import parentController from "./parentController";
import landingComponent from "./landing/landingComponent";

import "./styles.scss";

angular
  .module("angularReact", ["ui.router"])
  .config(routerConfig)
  .controller("parentController", parentController)
  .component("landingComponent", landingComponent);

angular.element(function() {
  angular.bootstrap(document, ["angularReact"]);
});
