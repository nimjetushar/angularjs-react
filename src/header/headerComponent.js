headerCtrl.$inject = [];

function headerCtrl() {
  this.isNavOpen = false;

  this.toggleNav = function() {
    this.isNavOpen = !this.isNavOpen;
  };
}

export default {
  templateUrl: "./headerComponent.html",
  controller: headerCtrl
};
