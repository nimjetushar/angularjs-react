import HeaderComponent from './headerComponent';

describe('component -> HeaderComponent', () => {
  let component;

  beforeEach(() => {
    component = new HeaderComponent.controller();
  });

  it('should close the navbar', () => {
    expect(component.isNavOpen).toBe(false);
  });

  it('should toggle menu bar', () => {
    component.toggleNav();
    expect(component.isNavOpen).toBe(true);
  });
});
