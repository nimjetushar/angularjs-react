import LandingComponent from "./landingComponent";

describe("component -> LandingComponent", () => {
  var component;
  beforeEach(() => {
    component = new LandingComponent.controller();
  });

  it("should add data on add", function() {
    var initialNoOfData = component.data.length;
    component.addContent();
    expect(component.data.length).toBe(initialNoOfData + 1);
  });
});
