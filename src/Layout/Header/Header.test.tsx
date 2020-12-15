import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { Header } from "./Header";

Enzyme.configure({ adapter: new Adapter() });

describe("ItemListWrapper", () => {
    test('Renders', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper).toBeTruthy();
    })
})
