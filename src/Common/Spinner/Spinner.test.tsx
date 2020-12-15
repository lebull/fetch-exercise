import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { Spinner } from "./Spinner";

Enzyme.configure({ adapter: new Adapter() });

describe("ItemListWrapper", () => {
    test('Renders', () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper).toBeTruthy();
    })
})
