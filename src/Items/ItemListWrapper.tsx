import { useEffect, useState } from 'react';
import { ItemGroupType } from "../data/types";
import { getItemGroups } from "../data/api";
import { ItemGroupList } from "./Items";
import "./Items.scss";

/**
 * Fetches items and displays an ItemGroupList.
 * 
 * @param mock : boolean - If true, the data pulled will be from the mock datasource
 */
interface ItemListWrapperProps {
    mock: boolean
}
export const ItemListWrapper = ({ mock } : ItemListWrapperProps) => {
    const [state, setstate] = useState({
        loading: true,
        error: null,
        itemGroups: [] as ItemGroupType[],
    });

    useEffect(() => {
        getItemGroups(mock).then(itemGroups => {
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
    }, [mock])

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
