import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from './App';
import { Items } from "./Items";

Enzyme.configure({ adapter: new Adapter() });

test('Renders the app wrapper', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Items)).toHaveLength(1);
});

