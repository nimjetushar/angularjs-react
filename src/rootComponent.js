export default {
  template: `
  <div class="container-fluid">
    <header></header>
    <ui-view></ui-view>
  </div>`,
  controller: rootController
};

rootController.$inject = [];

function rootController() {}
