import { useEffect, useState } from 'react';
import { ItemType, ItemGroupType } from "../data/types";
import { getItemGroups } from "../data/api";

export const ItemList = () => {
    const [state, setstate] = useState({
        loading: true,
        error: null,
        itemGroups: [] as ItemGroupType[],
    });

    useEffect(() => {
        getItemGroups(true).then(itemGroups => {
            setstate({
                loading: false,
                error: null,
                itemGroups: itemGroups,
            })
        }).catch(error => {
            setstate({
                loading: false,
                error: error,
                itemGroups: []
            })
        })
    }, [])

    const sortItems = (itemA: ItemGroupType, itemB: ItemGroupType) => (parseInt(itemA.id, 10) - parseInt(itemB.id, 10))

    if (state.loading) {
        return <div>Loading...</div>
    }

    if (state.error) {
        return <div>There was a problem fetching items.</div>
    }

    if (state.itemGroups.length <= 0) {
        return <div>No items found</div>
    }

    return <div>
        {state.itemGroups.sort(sortItems).map(itemGroup => <ItemGroup key={itemGroup.id} itemGroup={itemGroup} />)}
    </div>
}

interface ItemGroupProps {
    itemGroup: ItemGroupType
}
const ItemGroup = ({ itemGroup }: ItemGroupProps) => {
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