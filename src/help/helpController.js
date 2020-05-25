import './help.scss';
/* This file demonstrates if there are already existing angular code still this work */

((angular) => {

  function helpCtrl($scope) {
    $scope.urls = [
      'https://docs.angularjs.org/guide/concepts',
      'https://reactjs.org/docs/getting-started.html',
      'https://codeburst.io/how-to-hook-reactjs-to-your-existing-angularjs-1-x-app-5ab1ac59c0c1',
      'https://getbootstrap.com/docs/4.0/getting-started/introduction/'
    ];
  }

  helpCtrl.$inject = ['$scope'];

  angular.module('angularReact').controller('helpCtrl', helpCtrl);
})(window.angular);
