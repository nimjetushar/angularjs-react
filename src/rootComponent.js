export default {
  template: `
  <div class="container-fluid">
    <header></header>
    <div class="pt-3">
      <ui-view></ui-view>
    </div>
  </div>`,
  controller: rootController
};

rootController.$inject = [];

function rootController() {}
