import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { Alert } from "./Alert";

Enzyme.configure({ adapter: new Adapter() });

describe("ItemListWrapper", () => {
    test('Renders', () => {
        const wrapper = shallow(<Alert type="danger"><p>Test</p></Alert>);
        expect(wrapper).toBeTruthy();
    })
})
