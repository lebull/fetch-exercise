import { ItemType, ItemGroupType } from "../data/types";

import "./Items.scss";

/**
 * Displays a list of item groups.
 */
interface ItemGroupListProps {
    itemGroups: ItemGroupType[]
}

export const ItemGroupList = ({itemGroups}: ItemGroupListProps) => {
    const sortItems = (itemA: ItemGroupType, itemB: ItemGroupType) => (parseInt(itemA.id, 10) - parseInt(itemB.id, 10))
    return <div className="itemGroupList">
        {itemGroups.sort(sortItems).map(itemGroup => <ItemGroup key={itemGroup.id} itemGroup={itemGroup} />)}
    </div>
}

/**
 * Displays an item group.
 */
interface ItemGroupProps {
    itemGroup: ItemGroupType
}
export const ItemGroup = ({ itemGroup }: ItemGroupProps) => {
    const getNumericNameFromItem = (item: ItemType) => parseInt(item.name.replace(/\D/g,''), 10);
    const sortItems = (itemA: ItemType, itemB: ItemType) => getNumericNameFromItem(itemA) - getNumericNameFromItem(itemB)
    return (<div className="itemGroup">
        <h2>List ID: {itemGroup.id} </h2>
        {  itemGroup.items.sort(sortItems).map((item) => <Item key={item.id} item={item} />)}
    </div>)
}

/**
 * Displays an item.
 */
interface ItemProps {
    item: ItemType
}
export const Item = ({ item }: ItemProps) => <div className="item">
    <div className="item--id">(ID: {item.id})</div>
    <div className="item--name">{item.name}</div>
</div>