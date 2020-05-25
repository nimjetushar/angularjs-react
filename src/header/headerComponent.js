function headerCtrl() {
  this.isNavOpen = false;

  this.toggleNav = () => {
    this.isNavOpen = !this.isNavOpen;
  };
}

headerCtrl.$inject = [];

export default {
  controller: headerCtrl,
  templateUrl: './headerComponent.html'
};
