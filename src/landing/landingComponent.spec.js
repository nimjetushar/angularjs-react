import LandingComponent from './landingComponent';

describe('component -> LandingComponent', () => {
  let component;
  beforeEach(() => {
    component = new LandingComponent.controller();
  });

  it('should add data on add', () => {
    const initialNoOfData = component.data.length;
    expect(component.data).toHaveLength(initialNoOfData);
    component.addContent();
    expect(component.data).toHaveLength(initialNoOfData + 1);
  });
});
