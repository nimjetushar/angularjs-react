headerCtrl.$inject = ["$scope"];

function headerCtrl($scope) {
  $scope.isNavOpen = false;

  $scope.toggleNav = function() {
    $scope.isNavOpen = !$scope.isNavOpen;
  };
}

export default {
  templateUrl: "./headerComponent.html",
  controller: headerCtrl
};
