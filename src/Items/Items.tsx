import { ItemType, ItemGroupType } from "../data/types";


interface ItemGroupListProps {
    itemGroups: ItemGroupType[]
}

export const ItemGroupList = ({itemGroups}: ItemGroupListProps) => {
    const sortItems = (itemA: ItemGroupType, itemB: ItemGroupType) => (parseInt(itemA.id, 10) - parseInt(itemB.id, 10))
    return <div>
        {itemGroups.sort(sortItems).map(itemGroup => <ItemGroup key={itemGroup.id} itemGroup={itemGroup} />)}
    </div>
}

interface ItemGroupProps {
    itemGroup: ItemGroupType
}
export const ItemGroup = ({ itemGroup }: ItemGroupProps) => {
    const getNumericNameFromItem = (item: ItemType) => parseInt(item.name.replace(/\D/g,''), 10);
    const sortItems = (itemA: ItemType, itemB: ItemType) => getNumericNameFromItem(itemA) - getNumericNameFromItem(itemB)
    return (<div>
        <h2>Group {itemGroup.id} </h2>
        {  itemGroup.items.sort(sortItems).map((item) => <Item key={item.id} item={item} />)}
    </div>)
}


interface ItemProps {
    item: ItemType
}
const Item = ({ item }: ItemProps) => <div>{item.name}</div>