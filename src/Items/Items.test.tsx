import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { ItemGroupType, ItemType } from '../data/types';

import { Item, ItemGroup, ItemGroupList } from "./Items";

Enzyme.configure({ adapter: new Adapter() });

const testItemGroups: ItemGroupType[] = [
    {
        id: "1",
        items: [
            {
                id: "1",
                name: "Item 1"
            },
            {
                id: "3",
                name: "Item 100"
            },
            {
                id: "5",
                name: "Item 2"
            }
        ]
    },
    {
        id: "3",
        items: [
            {
                id: "1",
                name: "Item 5"
            },
            {
                id: "4",
                name: "Item 14"
            }
        ],
    },
    {
        id: "2",
        items: [
            {
                id: "2",
                name: "Item 6"
            }
        ]
    }
]

describe("ItemGroupList", () => {
    test('Renders', () => {
        const wrapper = shallow(<ItemGroupList itemGroups={testItemGroups} />);
        expect(wrapper.find(ItemGroup)).toHaveLength(3);
    })
})

describe("ItemGroup", () => {
    test('Renders', () => {
        const wrapper = shallow(<ItemGroup itemGroup={testItemGroups[0]} />);
        expect(wrapper.find(Item)).toHaveLength(3);
    })
})

describe("Item", () => {
    test('Renders', () => {
        const testItem: ItemType = testItemGroups[0].items[0];
        const wrapper = shallow(<Item item={testItem} />);
        expect(wrapper).toBeTruthy();
    })
})


