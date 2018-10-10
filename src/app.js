import "./styles.scss";

import appModule from "./app.module";

import routerConfig from "./route";
import rootComponent from "./rootComponent";
import landingComponent from "./landing/landingComponent";
import headerComponent from "./header/headerComponent";
import "./help/helpController"

appModule
  .config(routerConfig)
  .component("root", rootComponent)
  .component("header", headerComponent)
  .component("landingComponent", landingComponent)

angular.element(function() {
  angular.bootstrap(document, ["angularReact"]);
});
