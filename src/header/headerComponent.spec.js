import HeaderComponent from "./headerComponent";

describe("component -> HeaderComponent", () => {
  var component;

  beforeEach(() => {
    component = new HeaderComponent.controller();
  });

  it("should close the navbar", function() {
    expect(component.isNavOpen).toBe(false);
  });

  it("should toggle menu bar", function() {
    component.toggleNav();
    expect(component.isNavOpen).toBe(true);
  });
});
