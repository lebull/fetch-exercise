import Axios, { AxiosResponse } from "axios";
import { Item, ItemList } from "./Types";

export const data_url = `https://fetch-hiring.s3.amazonaws.com/hiring.json`;

/**
 * Returns raw response provided at the example endpoint
 */
export const _getData = async () : Promise<AxiosResponse> => {
    return await Axios.get(data_url);
}

/**
 * Returns all ItemLists (including items) provided at the example endpoint
 */
export const getItemGroups = async () : Promise<ItemList[]> => {
    let itemLists = {};
    (await _getData())
        .data
        .filter(rawItem => rawItem.name)
        .forEach( rawItem =>{
            const newItem = { 
                id: rawItem.id,
                name: rawItem.name
            } as Item;
            if(!itemLists[rawItem.listId]){
                itemLists[rawItem.listId] = { 
                    id: rawItem.listId,
                    items: [newItem]
                } as ItemList
            } else {
                itemLists[rawItem.listId].items.push(newItem)
            }
        }
    );
    return Object.entries(itemLists)
        .map(([key, item]) => item as ItemList);
}