import './styles.scss';
import angular from 'angular';
import appModule from './app.module';
import routerConfig from './route';
import rootComponent from './rootComponent';
import landingComponent from './landing/landingComponent';
import headerComponent from './header/headerComponent';
import './help/helpController';
import tableDirective from './landing/tableDir';

appModule
  .config(routerConfig)
  .component('root', rootComponent)
  .component('header', headerComponent)
  .component('landingComponent', landingComponent)

  .directive('tableDirective', tableDirective);

angular.element(() => {
  angular.bootstrap(document, ['angularReact']);
});
