import "./styles.scss";

import angular from "angular";
import uiRouter from "@uirouter/angularjs";

import routerConfig from "./route";
import rootComponent from "./rootComponent";
import landingComponent from "./landing/landingComponent";
import headerComponent from "./header/headerComponent";
import aboutComponent from "./about/aboutComponent";

angular
  .module("angularReact", ["ui.router"])
  .config(routerConfig)
  .component("root", rootComponent)
  .component("header", headerComponent)
  .component("landingComponent", landingComponent)
  .component("aboutComponent", aboutComponent);

angular.element(function() {
  angular.bootstrap(document, ["angularReact"]);
});
