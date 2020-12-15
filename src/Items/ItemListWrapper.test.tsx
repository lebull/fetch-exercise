import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { ItemListWrapper } from "./ItemListWrapper";

Enzyme.configure({ adapter: new Adapter() });

describe("ItemListWrapper", () => {
    test('Renders', () => {
        const wrapper = shallow(<ItemListWrapper mock={true}/>);
        expect(wrapper).toBeTruthy();
    })
})
