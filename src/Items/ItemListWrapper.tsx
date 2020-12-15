import { useEffect, useState } from 'react';
import { ItemGroupType } from "../data/types";
import { getItemGroups } from "../data/api";
import { ItemGroupList } from "./Items";
import { Alert } from "../Common/Alert/Alert";
import "./ItemListWrapper.scss";

/**
 * Fetches items and displays an ItemGroupList.
 */

export const ItemListWrapper = () => {

    // If set to true, this component will pull from the mock data instead.
    // Since this is more of a patch to a problem, I set this aside from the rest of the component's state.
    const [mock, setMock] = useState(false);

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
        return <div className="itemListWrapper">Loading...</div>
    }

    if (state.error) {
        return <div className="itemListWrapper">
            <Alert type="danger">
                {!mock ?
                    <div>
                        <p>As of 12/15/2020, the S3 bucket for this exercise is not configured to respond with CORS requests.  It may work properly once this is configured correctly.</p>
                        <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html</a>
                        <p>In the meantime, you can still see the application output the same mock data served from the application itself.</p>
                        <button onClick={() => setMock(!mock)}>Use Mock Data</button>
                    </div>
                    :
                    <p>There was a problem fetching items.</p>
                }
            </Alert>
        </div>
    }

    if (state.itemGroups.length <= 0) {
        return <div className="itemListWrapper">No items found</div>
    }

    return <div className="itemListWrapper">
        <ItemGroupList itemGroups={state.itemGroups} />
    </div>
}
