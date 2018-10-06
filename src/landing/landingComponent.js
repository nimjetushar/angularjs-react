landingController.$inject = [];

function landingController() {
  this.name = "world";
}

export default {
  templateUrl: "./landingComponent.html",
  controller: landingController
};
