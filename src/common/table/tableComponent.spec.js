import React from 'react';
import { shallow } from 'enzyme';
import Table from './tableComponent';

describe('Table', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should render correctly', () => {
    shallow(<Table />);
  });

  it('should render initial layout', () => {
    const component = shallow(<Table />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
