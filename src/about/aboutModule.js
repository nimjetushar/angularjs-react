import angular from "angular";
import uiRouter from "@uirouter/angularjs";

import aboutComponent from "./aboutComponent";

const ABOUT_MODULE = angular
  .module("AboutModule", [])
  .config([
    "$stateProvider",
    function($stateProvider) {
      $stateProvider.state("about", {
        url: "/about",
        component: "aboutComponent"
      });
    }
  ])
  .component("aboutComponent", aboutComponent);

export default ABOUT_MODULE;
