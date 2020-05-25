function rootController() { }

rootController.$inject = [];

export default {
  controller: rootController,
  template: `
  <div class="container-fluid">
    <header></header>
    <div class="pt-3">
      <ui-view></ui-view>
    </div>
  </div>`
};
