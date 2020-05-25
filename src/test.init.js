import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'angular';
import 'angular-mocks';

Enzyme.configure({ adapter: new Adapter() });
