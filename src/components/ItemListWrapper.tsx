import { useEffect, useState } from 'react';
import { ItemGroupType } from "../data/types";
import { getItemGroups } from "../data/api";
import { ItemGroupList } from "./Items";

export const ItemGroupListWrapper = () => {
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
        <ItemGroupList itemGroups={state.itemGroups} />
    </div>
}
