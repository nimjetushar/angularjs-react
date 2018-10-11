import angular from "angular";

import aboutComponent from "./aboutComp/aboutComponent";

const ABOUT_MODULE = angular
  .module("AboutModule", [])
  .config([
    "$stateRegistryProvider",
    function($stateRegistry) {
      // any two of the way can be used
      $stateRegistry.register({
        name: "about",
        url: "/about",
        component: "aboutComponent"
      });
      // $stateProvider.state("about", {
      //   url: "/about",
      //   component: "aboutComponent"
      // });
    }
  ])
  .component("aboutComponent", aboutComponent);

export default ABOUT_MODULE;
